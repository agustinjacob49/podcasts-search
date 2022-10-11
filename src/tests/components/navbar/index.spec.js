/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../../../components/navbar";
import * as router from 'react-router';
import LoaderContext from "../../../utils/context/loaderContext";


const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
})

jest.setTimeout(900000);
describe("Navbar", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  afterAll( () => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  test("Snapshot testing - Should render podcaster", async () => {

    const { container, getByText, queryAllByTestId } = render(<Router><Navbar /></Router>);

    expect(container).toMatchSnapshot();
    expect(getByText("Podcaster")).toBeDefined();
    expect(queryAllByTestId("loader")).toStrictEqual([]);
  });

  test("Snapshot testing - Should render loader", async () => {

    const { container, getAllByTestId } = render(<Router> <LoaderContext.Provider value={true}><Navbar /> </LoaderContext.Provider></Router>);

    expect(container).toMatchSnapshot();
    expect(getAllByTestId("loader")).toBeDefined();
  });
});
