import React from "react";
import {render,screen} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import Hero from "../src/landing_page/home/Hero";


//TEST SUIT 
describe("Hero Component",()=>{
    test("renders hero image",()=>{
        render(<Hero/>);
        const heroImage=screen.getByAltText("Hero image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/image");
    });
})