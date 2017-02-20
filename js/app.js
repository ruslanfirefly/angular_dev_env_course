"use strict";
import "babel-polyfill";
import angular from "angular"

import "../css/style.css";
import "../less/test.less";
import "../sass/test.scss";


import testController from "./controllers/testController"

angular.module("test",[])
    .controller("testController", testController);


