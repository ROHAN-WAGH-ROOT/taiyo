import React, { useEffect, useRef } from "react";
import L, { Map } from "leaflet";
import "leaflet/dist/leaflet.css";

interface CountryInfo {
  _id: number;
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
  flag: string;
  country: string;
}

interface CountryData {
  active: number;
  activePerOneMillion: number;
  cases: number;
  casesPerOneMillion: number;
  continent: string;
  country: string;
  countryInfo: CountryInfo;
  critical: number;
  criticalPerOneMillion: number;
  deaths: number;
  deathsPerOneMillion: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  population: number;
  recovered: number;
  recoveredPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  todayCases: number;
  todayDeaths: number;
  todayRecovered: number;
  updated: number;
}

interface LeafletMapProps {
  globalData: CountryData;
  countryData: CountryData[];
}

const LeafletMap: React.FC<LeafletMapProps> = ({ globalData, countryData }) => {
  const mapRef = useRef<Map | undefined>();

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.remove();
    }
    mapRef.current = L.map("map").setView([0, 0], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "Map data &copy; OpenStreetMap contributors",
    }).addTo(mapRef.current!);

    // Add markers for global data
    const globalMarker = L.marker([0, 0]).addTo(mapRef.current!);
    globalMarker.bindPopup(`Global Cases: ${globalData.cases}`);

    // Add markers for country data
    countryData.forEach((country) => {
      const { lat, long } = country.countryInfo;
      const marker = L.marker([lat, long]).addTo(mapRef.current!);
      marker.bindPopup(`Country: ${country.country}`);
    });
  }, [globalData, countryData]);

  return <div id="map" style={{ height: "500px", width: "100%" }}></div>;
};

export default LeafletMap;
