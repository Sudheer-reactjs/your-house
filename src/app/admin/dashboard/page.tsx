"use client";
import DashboardCard from "@/app/admin/components/DashboardCard";

import { useSession } from "next-auth/react";
import useSWR from "swr";
import ReactLoading from "react-loading";
import { AddIcon } from "@/utils/svgicons";
import RecentProjects from "../components/RecentProjects";

const Home = () => {
  const session = useSession();
  const { data, error, isLoading } = useSWR(
    `/admin/dashboard?id=${session?.data?.user?.id}`
  );
  const finalData: any = data?.data;
  const OverviewData = [
    {
      id: "1",
      title: "Ongoing Projects",
      value: 18,
      bgColor: "#F44771",
    },
    {
      id: "2",
      title: "Completed Projects",
      value: 18,
      bgColor: "#FF9A3E",
    },
  ];

  return (
    <>
      <h1 className="font-antic text-[#283C63] text-[26px] leading-[1.2em] mb-[25px] lg:text-[30px] lg:mb-[40px]">
        Dashboard
      </h1>
      <h5 className="mb-[15px] text-[#353E6C]">Monthly Overview</h5>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px] md:gap-[22px]">
        <div className="md:col-span-2 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-[15px] md:gap-[22px]">
          {OverviewData.map((card) => (
            <DashboardCard
              key={card.id}
              title={card.title}
              value={
                card.value ?? (
                  <ReactLoading
                    type={"spin"}
                    color={"#26395e"}
                    height={"20px"}
                    width={"20px"}
                  />
                )
              }
              bgColor={card.bgColor}
            />
          ))}
        </div>
        <div className="md:col-span-1">
          <a
            href="3"
            className="bg-[#1657FF] min-h-[120px] rounded-[20px] py-[20px] px-[25px] flex justify-between gap-3 md:gap-3 "
          >
            <div className="">
              <p className="leading-normal font-sfproDisplaybold text-[20px] text-[#fff] ">
                Create a New Project
              </p>
              <p className="text-[#fff] text-[14px] max-w-[180px]">
                Click to add a new project to the list.
              </p>
            </div>
            <AddIcon />
          </a>
        </div>
      </div>
      <div className="mt-[40px]">
        <h5 className="mb-[15px] text-[#353E6C]">Recent Projects</h5>
        <RecentProjects />
      </div>
    </>
  );
};
export default Home;
