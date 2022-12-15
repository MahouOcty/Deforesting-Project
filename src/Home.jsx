import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { firebaseDB } from './initializer/firebaseConfig';



const Home = () => {

    const [zones, setZones] = useState([]);
    const [animals, setAnimals] = useState([]);

    
    useEffect(() => {
        const getAnimals = async () => {
            const colRef = collection(firebaseDB, "animals");
            const q = query(colRef);
            onSnapshot(q, (snapshot) => {
                const docs = [];
                snapshot.docs.forEach((doc) => {
                    
                    var inDeforestedZone = false;
                    const long = doc.data().location._long;
                    const lat = doc.data().location._lat;
                        
                    zones.every((zone) => {
                        if ((long > zone.southwest._long && long < zone.northeast._long) &&(lat > zone.southwest._lat && lat < zone.northeast._lat) ) {
                            inDeforestedZone = true;
                            return false
                        }
                        return true
                    })
                    docs.push({...doc.data(), id: doc.id, inDeforestedZone: inDeforestedZone})
                });
              setAnimals(docs);
            })
        }

        const getZones = async () => {
            const colRef = collection(firebaseDB, "deforestationZones");
            const q = query(colRef);
            onSnapshot(q, (snapshot) => {
              const docs = [];
              snapshot.docs.forEach((doc) => {
               docs.push({...doc.data(), id: doc.id })
              });
              setZones(docs);
            })
        }

        getAnimals()
        getZones()

        
    }, [zones])

   
    return (
        <div>
            <h1>Deforested Zones</h1>
            {zones.map(zone => {
                return(
                    <ul key={zone.id}>
                        <li>
                            Geocordinates
                            <ul>
                                <li>North: { zone.northeast._lat}°</li>
                                <li>South: {zone.southwest._lat}°</li>
                                <li>East: {zone.northeast._long}°</li>
                                <li>West: {zone.southwest._long}°</li>
                            </ul>
                        </li>
                        <li>Area: {zone.area}m² </li>
                    </ul>
                )
            }) }
            <h1>Registered Cattle</h1>
            {animals.map((a) => {
                return(<ul key={a.id}>
                    <li>Owner: {a.owner}</li>
                    <li>
                        Geocordinates
                        <ul>
                           <li> Latitude: {a.location._lat} </li>
                           <li> Longitude: {a.location._long} </li>
                        </ul>
                    </li>
                    {a.inDeforestedZone ? (<li>This cattle is in a deforested zone</li>) : (<></>) }
                </ul>)
            })}
        </div>
    );
};

export default Home;