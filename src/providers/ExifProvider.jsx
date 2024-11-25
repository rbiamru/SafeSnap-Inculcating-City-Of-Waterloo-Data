// ExifProvider.jsx
import React, { createContext, useContext } from 'react';
import EXIF from 'exif-js-heic';

export const ExifContext = createContext({});

const ExifProvider = ({ children }) => {
    
    const extractExifData = (file, callback) => {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;

            img.onload = function () {
                EXIF.getData(img, function () {
                    const latitude = EXIF.getTag(this, "GPSLatitude");
                    const longitude = EXIF.getTag(this, "GPSLongitude");
                    const latitudeRef = EXIF.getTag(this, "GPSLatitudeRef");
                    const longitudeRef = EXIF.getTag(this, "GPSLongitudeRef");
                    //console.log(EXIF.getAllTags(this));
                    //console.log("Raw GPS data:", { latitude, longitude, latitudeRef, longitudeRef });
                
                    let exifData = '';
                    if (latitude && longitude && latitudeRef && longitudeRef) {
                        const lat = convertDMSToDD(latitude, latitudeRef);
                        const lon = convertDMSToDD(longitude, longitudeRef);
                        exifData = `Latitude: ${lat}, Longitude: ${lon}`;
                        console.log(exifData);
                        callback({ latitude: lat, longitude: lon });
                    } else {
                        callback(null);
                    }
                });
            };
        };
        reader.readAsDataURL(file);
    };

    // const convertDMSToDD = (dms, ref) => {
    //     if (!Array.isArray(dms) || dms.length < 3) {
    //         return NaN;
    //     }
    //     const [degrees, minutes, seconds] = dms;
    //     let decimal = degrees + (minutes / 60) + (seconds / 3600);
    //     if (ref === "S" || ref === "W") {
    //         decimal = -decimal;
    //     }
    //     return decimal;
    // };

    const convertDMSToDD = (dms, ref) => {
        if (!Array.isArray(dms) || dms.length < 3) {
            return NaN;
        }
        let degrees = dms[0];
        let minutes = dms[1];
        let seconds = dms[2];

        if (typeof degrees !== 'number') degrees = degrees.numerator / degrees.denominator;
        if (typeof minutes !== 'number') minutes = minutes.numerator / minutes.denominator;
        if (typeof seconds !== 'number') seconds = seconds.numerator / seconds.denominator;

        let decimal = degrees + (minutes / 60) + (seconds / 3600);
        if (ref === "S" || ref === "W") {
            decimal = -decimal;
        }
        return decimal;
    };
    const theValues = {
        extractExifData,
        convertDMSToDD,
    };

    return (
        <ExifContext.Provider value={theValues}>
            {children}
        </ExifContext.Provider>
    );
};

const useExifContext = () => {
    const context = useContext(ExifContext);
    if (context === undefined) {
        throw new Error('useExifContext was used outside of its Provider');
    }
    return context;
};

export { ExifProvider, useExifContext };
