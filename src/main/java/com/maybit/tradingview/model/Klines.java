package com.maybit.tradingview.model;

import java.io.Serializable;
/**
 * 功能描述：
 * K线实体
 */
public class Klines implements Serializable {
	private static final long serialVersionUID = -2134455773345461123L;

	//s: 状态码。 预期值:ok|error|no_data
    private String s;
    //errmsg: 错误消息。只在s = 'error'时出现
    private String errmsg;
	//交易对
    private String symbol;
	//周期
    private Integer peroid;
	//时间
    private Long[] t;
	//开盘价
    private Double[] o;
	//收盘价 
    private Double[] c;
	//最高价
    private Double[] h;
	//最低价
    private Double[] l;
	//成交量
    private Double[] v;
	//下一个K线柱的时间 如果在请求期间无数据 (状态码为no_data) (可选)
    private Long nextTime;
	public String getS() {
		return s;
	}
	public void setS(String s) {
		this.s = s;
	}
	public String getErrmsg() {
		return errmsg;
	}
	public void setErrmsg(String errmsg) {
		this.errmsg = errmsg;
	}
	public String getSymbol() {
		return symbol;
	}
	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}
	public Integer getPeroid() {
		return peroid;
	}
	public void setPeroid(Integer peroid) {
		this.peroid = peroid;
	}
	public Long[] getT() {
		return t;
	}
	public void setT(Long[] t) {
		this.t = t;
	}
	public Double[] getO() {
		return o;
	}
	public void setO(Double[] o) {
		this.o = o;
	}
	public Double[] getC() {
		return c;
	}
	public void setC(Double[] c) {
		this.c = c;
	}
	public Double[] getH() {
		return h;
	}
	public void setH(Double[] h) {
		this.h = h;
	}
	public Double[] getL() {
		return l;
	}
	public void setL(Double[] l) {
		this.l = l;
	}
	public Double[] getV() {
		return v;
	}
	public void setV(Double[] v) {
		this.v = v;
	}
	public Long getNextTime() {
		return nextTime;
	}
	public void setNextTime(Long nextTime) {
		this.nextTime = nextTime;
	}
}