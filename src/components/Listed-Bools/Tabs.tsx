import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { FaFile } from "react-icons/fa";
import { Link } from "react-router-dom";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface Books {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  review: string;
  totalPages: number;
  rating: number;
  category: number;
  tags: string[];
  publisher: string;
  yearOfPublishing: number;
}

interface ChilProps {
  readingList: Books[];
  wishList: Books[];
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsOfRW(props: ChilProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Reading List" {...a11yProps(0)} />
          <Tab label="Wish List" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {props.readingList.map((book, index) => (
          <span key={index} className="p-6 flex gap-6 lg:flex-row flex-col">
            <span className="bg-slate-200 py-7 rounded-2xl flex-1">
              <img src={book.image} alt="" className="w-10/12 mx-auto" />
            </span>

            <span className="text-black lg:w-3/4 w-full">
              <span className="font-bold text-2xl">{book.bookName}</span>
              <span className="font-work font-normal text-base py-4 block">
                By : {book.author}
              </span>

              <span className="flex gap-4 items-center flex-wrap">
                <span className="text-base font-work font-bold">Tag</span>{" "}
                {book.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#f3f3f3] rounded-full py-[0.44rem] px-4 text-green-400 text-base font-work"
                  >
                    #{tag}
                  </span>
                ))}
                <CiLocationOn className="text-base" />
                <span className="text-base font-normal">
                  Year of Publishing: {book.yearOfPublishing}
                </span>
              </span>
              <span className="flex gap-4 items-center py-4 flex-wrap">
                <span className="flex gap-2 items-center">
                  <GoPeople />
                  <span>Publisher : {book.publisher}</span>
                </span>
                <span className="flex gap-2 items-center flex-wrap">
                  <FaFile />
                  <span>Page {book.totalPages}</span>
                </span>
              </span>
              <span className="border border-solid border-slate-200 w-full h-[1px] block my-4"></span>
              <span className="flex items-center gap-4 flex-wrap pt-4">
                <button className="border-none btn rounded-full bg-sky-300 text-sky-600">
                  Category: {book.category}
                </button>
                <button className="border-none btn rounded-full bg-yellow-300 text-yellow-600">
                  Rating: {book.rating}
                </button>
                <Link to={`/books/${book.bookId}`}>
                  <button className="border-none btn rounded-full bg-green-500 text-white">
                    View Details
                  </button>
                </Link>
              </span>
            </span>
          </span>
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {props.wishList.map((book, index) => (
          <span key={index} className="p-6 flex gap-6 lg:flex-row flex-col">
            <span className="bg-slate-200 py-7 rounded-2xl flex-1">
              <img src={book.image} alt="" className="w-10/12 mx-auto" />
            </span>

            <span className="text-black lg:w-3/4 w-full">
              <span className="font-bold text-2xl">{book.bookName}</span>

              <span className="font-work font-normal text-base py-4 block">
                By : {book.author}
              </span>

              <span className="flex gap-4 items-center flex-wrap">
                <span className="text-base font-work font-bold">Tag</span>{" "}
                {book.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#f3f3f3] rounded-full py-[0.44rem] px-4 text-green-400 text-base font-work"
                  >
                    #{tag}
                  </span>
                ))}
                <CiLocationOn className="text-base" />
                <span className="text-base font-normal">
                  Year of Publishing: {book.yearOfPublishing}
                </span>
              </span>
              <span className="flex gap-4 items-center py-4 flex-wrap">
                <span className="flex gap-2 items-center">
                  <GoPeople />
                  <span>Publisher : {book.publisher}</span>
                </span>
                <span className="flex gap-2 items-center flex-wrap">
                  <FaFile />
                  <span>Page {book.totalPages}</span>
                </span>
              </span>
              <span className="border border-solid border-slate-200 w-full h-[1px] block my-4"></span>
              <span className="flex items-center gap-4 flex-wrap pt-4">
                <button className="border-none btn rounded-full bg-sky-300 text-sky-600">
                  Category: {book.category}
                </button>
                <button className="border-none btn rounded-full bg-yellow-300 text-yellow-600">
                  Rating: {book.rating}
                </button>
                <Link to={`/books/${book.bookId}`}>
                  <button className="border-none btn rounded-full bg-green-500 text-white">
                    View Details
                  </button>
                </Link>
              </span>
            </span>
          </span>
        ))}
      </CustomTabPanel>
    </Box>
  );
}
