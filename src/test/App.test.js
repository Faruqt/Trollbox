import React from "react"
import ReactDom from "react-dom"
import App from "../components/App"
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Productcards";

describe("Test that App runs effectively", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDom.render(<App />, div)
    })
})

Enzyme.configure({ adapter: new Adapter() });
describe("Test header component", () => {
    it("it renders a header element", () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.find("header").length).toBe(1)
    })
    it("it contains the p sample element", () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.contains( <p className="topText"> Trollbasket</p>)).toBe(true)
       
    })
})

describe("Test footer component", () => {
    it("it renders a footer element", () => {
        const wrapper = shallow(<Footer />)
        expect(wrapper.find("footer").length).toBe(1)
    })
    it("it contains the p element", () => {
        const wrapper = shallow(<Footer />)
        expect(wrapper.contains( <p></p>)).toBe(true)
    })
})
describe("Test Productcards component", () => {
    it("it renders a div element", () => {
        const wrapper = shallow(<Product />)
        expect(wrapper.find("div").length).toBe(1)
    })
    it("it contains three p elements", () => {
        const wrapper = shallow(<Product />)
        expect(wrapper.find("p").length).toBe(3)
    })
})
