import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        let chart_data = {
            title:{
                text: "Basic Candle Stick Chart"
            },
            zoomEnabled: true,
            axisY: {
                includeZero:false,
                title: "Prices",
                prefix: "$ "
            },
            axisX: {
                interval:2,
                intervalType: "month",
                valueFormatString: "MMM-YY",
                labelAngle: -45
            },
            data: [
                {
                    type: "candlestick",
                    dataPoints: [
                        {x: new Date(2012,1,1),y:[5198, 5629, 5159, 5385]},
                        {x: new Date(2012,2,1),y:[5366, 5499, 5135, 5295]},
                        {x: new Date(2012,3,1),y:[5296, 5378, 5154, 5248]},
                        {x: new Date(2012,4,1),y:[5254, 5279, 4788, 4924]},
                        {x: new Date(2012,5,1),y:[4910, 5286, 4770, 5278]},
                        {x: new Date(2012,6,1),y:[5283, 5348, 5032, 5229]},
                        {x: new Date(2012,7,1),y:[5220, 5448, 5164, 5258]},
                        {x: new Date(2012,8,1),y:[5276, 5735, 5215, 5703]},
                        {x: new Date(2012,9,1),y:[5704, 5815, 4888, 5619]},
                        {x: new Date(2012,10,1),y:[5609, 5885, 5548, 5879]},
                        {x: new Date(2012,11,1),y:[5878, 5965, 5823, 5905]},
                        {x: new Date(2013,0,1),y:[5937, 6111, 5935, 6034]},
                        {x: new Date(2013,1,1),y:[6040, 6052, 5671, 5693]},
                        {x: new Date(2013,2,1),y:[5702, 5971, 5604, 5682]},
                        {x: new Date(2013,3,1),y:[5697, 5962, 5477, 5930]},
                        {x: new Date(2013,4,1),y:[5911, 6229, 5910, 5985]},
                        {x: new Date(2013,5,1),y:[5997, 6011, 5566, 5842]},
                        {x: new Date(2013,6,1),y:[5834, 6093, 5675, 5742]},
                        {x: new Date(2013,7,1),y:[5776, 5808, 5118, 5471]},
                        {x: new Date(2013,8,1),y:[5480, 6142, 5318, 5735]},
                        {x: new Date(2013,9,1),y:[5756, 6309, 5700, 6299]},
                        {x: new Date(2013,10,1),y:[6289, 6342, 5972, 6176]},
                        {x: new Date(2013,11,1),y:[6171, 6415, 6129, 6304]}
                    ]
                }
            ]
        };
        let chart = new CanvasJS.Chart("chartContainer", chart_data);
        chart.render();
    }
});
