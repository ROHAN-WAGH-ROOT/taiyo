import { useQuery } from "react-query";
import axios from "axios";
import LineChart from "./line";
import LeafletMap from "./LeafNode";
import React from "react";
type dates = string[];
type casesValue = string[];
type deathsValue = string[];
type recoveredValue = string[];

export default function Maps(this: any) {
  const firstfetch = async () => {
    return await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
  };
  const second = async () => {
    return await axios.get("https://disease.sh/v3/covid-19/all");
  };
  const third = async () => {
    return await axios.get("https://disease.sh/v3/covid-19/countries");
  };
  const { isLoading, data, error }: any = useQuery("getData", firstfetch);
  const {
    isLoading: load,
    data: dataCovid,
    error: errorCovid,
  }: any = useQuery("covid", second);
  const {
    isLoading: loading,
    data: dataWorld,
    error: errorWorld,
  }: any = useQuery("world", third);
  const dates: dates = data && Object.keys(data?.data?.cases);
  const casesValue: casesValue = data && Object.values(data?.data?.cases);
  const deathsValue: deathsValue = data && Object.values(data?.data?.deaths);
  const recoveredValue: recoveredValue =
    data && Object.values(data?.data?.recovered);

  if (isLoading || loading || load) {
    return <div>...Loading</div>;
  }
  if (error || errorCovid || errorWorld) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="xl:2xl:ml-28 w-auto sm:md:lg:ml-28">
      <LineChart
        dates={dates}
        casesValue={casesValue}
        deathsValue={deathsValue}
        recoveredValue={recoveredValue}
      />
      <div>
        {dataWorld && dataCovid && (
          <LeafletMap
            globalData={dataCovid.data}
            countryData={dataWorld.data}
          />
        )}
      </div>
    </div>
  );
}
