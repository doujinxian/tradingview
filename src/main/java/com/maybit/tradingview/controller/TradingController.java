package com.maybit.tradingview.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TradingController {

    @RequestMapping("/")
    public String config() {
        return "trade";
    }

}
