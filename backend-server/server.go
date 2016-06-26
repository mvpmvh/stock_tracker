package main

import (
	"encoding/json"
	"github.com/gorilla/context"
	"github.com/gorilla/mux"
	//"gopkg.in/olivere/elastic.v3"
	"net/http"
	"fmt"
	"strconv"
)

const (
	JsonKey         = iota
	JsonContentType = "application/json; charset=UTF-8"
)

type Stock struct {
	Id     int	`json:"id"`
	Name   string	`json:"name"`
	Symbol string	`json:"symbol"`
	Low    float32	`json:"low"`
	High   float32	`json:"high"`
	Open   float32	`json:"open"`
	Close  float32	`json:"close"`
}

var mockData = []Stock{
	Stock{
		Id:     1,
		Name:   "Alphabet Inc.",
		Symbol: "GOOGL",
		Low:    145.22,
		High:   194.18,
		Open:   155.27,
		Close:  186.88,
	},
	Stock{
		Id:     2,
		Name:   "Apple Inc.",
		Symbol: "AAPL",
		Low:    112.04,
		High:   172.23,
		Open:   115.14,
		Close:  144.43,
	},
	Stock{
		Id:     3,
		Name:   "Yahoo! Inc.",
		Symbol: "YHOO",
		Low:    32.56,
		High:   45.68,
		Open:   35.03,
		Close:  33.27,
	},
}

func CorsHandler(next http.HandlerFunc) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")	//feeling generous

		//execute the next middleware in the chain of middlewares
		next.ServeHTTP(w, r)
	})
}

func JsonHandler(next http.HandlerFunc) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		//This just sets the response header to application/json
		//The browser will read this and format the response in json format
		w.Header().Set("Content-Type", JsonContentType)

		//execute the next middleware in the chain of middlewares
		next.ServeHTTP(w, r)

		data := context.Get(r, JsonKey)
		if data != nil {
			j, err := json.Marshal(data)
			if err != nil {
				//This will only happen if there was a problem converting data into JSON
				//This should not ever happen, but just in case...
				w.WriteHeader(http.StatusInternalServerError)
				w.Write([]byte(`{error: "Unexpected error"}`))
			}
			w.Write(j)
		}
	})
}

func AllStocksHandler(w http.ResponseWriter, r *http.Request) {
	data := struct {
		Data *[]Stock `json:"stocks"`
	}{&mockData}

	context.Set(r, JsonKey, &data)
}

func FindStockHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	stockId, _ := strconv.Atoi(vars["id"])
	stock := mockData[stockId]
	data := struct {
		Data *Stock `json:"stock"`
	}{&stock}

	context.Set(r, JsonKey, &data)
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/stocks", CorsHandler(JsonHandler(AllStocksHandler))).Methods("GET")
	r.HandleFunc("/stocks/{id:[0-9]+}", CorsHandler(JsonHandler(FindStockHandler))).Methods("GET")
	fmt.Println("Server listening on port 3001...")
	http.ListenAndServe(":3001", r)
}
