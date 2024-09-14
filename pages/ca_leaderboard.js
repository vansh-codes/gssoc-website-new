import React, { useState, useEffect } from "react";
import { Box, Skeleton, SkeletonCircle, Spacer, Avatar } from "@chakra-ui/react";
import Head from "next/head";
import { useTheme } from "next-themes";
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Confetti from 'react-confetti';

const DynamicPagination = dynamic(() => import('react-js-pagination'), {
  ssr: false,
});

const CALeaderboard = () => {
  const { theme } = useTheme();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activePage, setActivePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [filter, setFilter] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);
  const router = useRouter();
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    setTimeout(() => setShowConfetti(false), 5000); // Turn off confetti after 5 seconds
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://opensheet.elk.sh/1Pl4_0G2AILRaUsFoG71xA4AXUaN0_otl_S0hpal0bZs/CAshoutout`
        );
        const data = await response.json();
        const processedData = data.map(user => ({
          Name: user.Name || 'N/A',
          Image: user.Image || '',
          ReferralCode: user.ReferralCode || 'abc',
          ReferralCount: parseInt(user.ReferralCount || '0'),
          score: calculateScore(parseInt(user.ReferralCount || '0'))
        }));
        processedData.sort((a, b) => b.score - a.score);
        setUsers(processedData);
        setSearchData(processedData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getUsers();
  }, [year]);

  const calculateScore = (referralCount) => {
    return referralCount * 10;
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setActivePage(1);
  };

  const filterData = () => {
    const filteredData = users.filter((user) =>
      user.Name.toLowerCase().includes(filter.toLowerCase())
    );
    setSearchData(filteredData);
    setActivePage(1);
  };

  const columns = [
    { id: "position", label: "Rank", minWidth: 50 },
    { id: "name", label: "Name", minWidth: 200 },
    { id: "referralCode", label: "Referral Code", minWidth: 100 },
    { id: "referralCount", label: "Referral Count", minWidth: 100 },
    { id: "score", label: "Score", minWidth: 100 },
  ];

  const years = ["Extended", 2024, 2023]; 

  return (
    <>
      <Head>
        <title>
          Top Campus Ambassadors | GirlScript Summer of Code {year} | GirlScript
          Foundation India
        </title>
        <meta name="description" content={`GirlScript Summer of Code Campus Ambassador Leaderboard ${year}`} />
      </Head>
      {showConfetti && <Confetti width={windowWidth} height={windowHeight} />}
      <div className="items-center justify-center">
        <div className="font-sans text-center text-md font-extrabold text-black-100 mt-5">
          <div className="flex justify-center mb-5">
          {years.map((y) => (
            <button
              key={y}
              className={`bg-gradient-to-b from-primary_orange-0 to-orange-600 text-lg dark:text-black rounded-b-md hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-10 py-3 rounded md:text-2xl md:py-4 mx-2 ${year === y ? 'ring-2 ring-white' : ''}`}
              onClick={() => {setYear(y);router.push(`/ca_leaderboard?year=${y}`)}}
            >
              {y}
            </button>
          ))}
        </div>
          <div className="text-primary_orange-0 dark:text-white font-sans text-3xl md:text-5xl text center font-extrabold flex wrap justify-center flex-col md:flex-row mb-10 underline decoration-orange-500  underline-offset-8">
            <h1 className="text-primary_orange-0 mt-5">Top Campus Ambassadors&nbsp;</h1>
          </div>
        </div>
      </div>
      <Spacer mt={10} />

      <div className="flex mb-5">
        <div className="input-group relative flex flex-wrap items-stretch w-full">
          <span className="relative flex items-center w-1/2 justify-start">
            <label className="mr-2 whites-nowrap text-gray-900 dark:text-gray-200 font-large text-xxl hover:text-gray-400">
              Showing
            </label>
            <select
              className="relative bg-gray-300 dark:bg-neutral-600 text-gray-900 dark:text-gray-200 font-large text-xxl hover:text-gray-400 items-center"
              onInput={handleItemsPerPageChange}
              onChange={() => handlePageChange(1)}
              value={itemsPerPage}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <label className="ml-2 whites-nowrap text-gray-900 dark:text-gray-200 font-large text-xxl hover:text-gray-400">
              rows per page
            </label>
          </span>
          <span className="relative flex w-1/2 justify-end">
            <span className="relative search-container flex w-full justify-end">
              <div className="relative flex search-container">
                <input
                  onChange={(e) => {
                    setFilter(e.target.value);
                    filterData();
                  }}
                  value={filter}
                  id="searchInputField"
                  type="text"
                  className="form-control relative flex-auto min-w-0 block px-0.5 py-1.5 text-base dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-600 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-400 focus:outline-none dark:placeholder-neutral-300"
                  placeholder="Search"
                  onKeyUp={() => {
                    filterData();
                  }}
                />
                <span className="search-count dark:text-neutral-300">
                  {searchData.length}
                </span>
              </div>
            </span>
          </span>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="table w-full">
          <div className="table-header-group">
            <div className="table-row">
              {columns.map((column) => (
                <div
                  className="table-cell font-serif px-4 py-4 bg-black text-white dark:bg-primary_orange-0 dark:text-black"
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </div>
              ))}
            </div>
          </div>
          {!isLoading && (
            <div className="table-row-group">
              {searchData.slice(0, 3).map((user, index) => (
                <div className="table-row" key={index}>
                  <div className="table-cell px-4 py-2 bg-leaderboardbg-0 text-black dark:bg-black dark:text-white font-medium">
                    {index + 1}
                  </div>
                  <div className="table-cell px-4 py-2 bg-leaderboardbg-0 text-black dark:bg-black dark:text-white font-medium">
                    <div className="flex items-center">
                      <Avatar src={user.Image} name={user.Name} size="sm" />
                      <span className="ml-2">{user.Name}</span>
                    </div>
                  </div>
                  <div className="table-cell px-4 py-2 bg-leaderboardbg-0 text-black dark:bg-black dark:text-white font-medium">
                    {user.ReferralCode}
                  </div>
                  <div className="table-cell px-4 py-2 bg-leaderboardbg-0 text-black dark:bg-black dark:text-white font-medium">
                    {user.ReferralCount}
                  </div>
                  <div className="table-cell px-4 py-2 bg-leaderboardbg-0 text-black dark:bg-black dark:text-white font-medium">
                    {user.score}
                  </div>
                </div>
              ))}
              {searchData.slice(3).slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage).map((user, index) => (
                <div className="table-row" key={index + 3}>
                  <div className="table-cell px-4 py-2 bg-leaderboardbg-0 text-black dark:bg-black dark:text-white font-medium">
                    {index + 4}
                  </div>
                  <div className="table-cell px-4 py-2 bg-leaderboardbg-0 text-black dark:bg-black dark:text-white font-medium">
                    <div className="flex items-center">
                      <Avatar src={user.Image} name={user.Name} size="sm" />
                      <span className="ml-2">{user.Name}</span>
                    </div>
                  </div>
                  <div className="table-cell px-4 py-2 bg-leaderboardbg-0 text-black dark:bg-black dark:text-white font-medium">
                    {user.ReferralCode}
                  </div>
                  <div className="table-cell px-4 py-2 bg-leaderboardbg-0 text-black dark:bg-black dark:text-white font-medium">
                    {user.ReferralCount}
                  </div>
                  <div className="table-cell px-4 py-2 bg-leaderboardbg-0 text-black dark:bg-black dark:text-white font-medium">
                    {user.score}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {isLoading && (
          <div className="flex flex-col items-center justify-center w-full h-80 gap-5">
            <SkeletonCircle size="80" />
            <Skeleton>
              <Box className="text-center px={4}"> Loading data... </Box>
            </Skeleton>
          </div>
        )}
      </div>
      {!isLoading && isClient && searchData.length > 0 && (
        <div className="pagination-holder">
          <DynamicPagination
            innerClass={
              theme === "dark" ? "dark-theme pagination" : "pagination"
            }
            itemClass="page-item"
            linkClass="page-link"
            activePage={activePage}
            activeClass="active-page"
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={searchData.length - 3}
            pageRangeDisplayed={windowWidth < 600 ? 3 : 5}
            onChange={handlePageChange}
          />
        </div>
      )}
      {!isLoading && searchData.length === 0 && (
        <div className="text-center text-xl mt-10">
          No entries found for the selected year.
        </div>
      )}
    </>
  );
};

export default CALeaderboard;