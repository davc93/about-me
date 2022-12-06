import { getProjects } from './api'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from('.techs h2', {
    scrollTrigger: '.techs h2',
    duration: 3,
    x: '100px'
})

