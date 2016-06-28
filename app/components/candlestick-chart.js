import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        let store = this.get('data');
        let name = store.get('name');
        let symbol = store.get('symbol');
        let currency = store.get('currency');
        let history = store.get('series');
        let labels = store.get('labels');

        let chart_data = {
            title:{
                text: `${name} (${symbol})`
            },
            zoomEnabled: true,
            axisY: {
                includeZero:false,
                title: "Prices",
                prefix: `${currency} `
            },
            axisX: {
                interval:5,
                intervalType: "day",
                valueFormatString: "MMM-DD-YY",
                labelAngle: -45
            },
            data: [
                {
                    type: "candlestick",
                    dataPoints: this._buildDataPoints(history)
                }
            ]
        };
        let chart = new CanvasJS.Chart("chartContainer", chart_data);
        chart.render();
    },

    _buildDataPoints(history) {
        let historyData = [];
        history.map(data => {
            historyData.push({x: this._parseDate(data.Date), y: [data.open, data.high, data.low, data.close]});
        });
        return historyData;
    },

    _parseDate(dateString) {
        let date = new Date();
        let match = /^(\d{4})(\d{2})(\d{2})$/.exec(dateString);
        if(Array.isArray(match) === true) {
            date = new Date(match[1], match[2]-1, match[3]);
        }
        return date;
    }
});
