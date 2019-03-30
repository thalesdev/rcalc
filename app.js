
new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        features: [
            {
                name: "Valor Presente",
            },
            {
                name: "Valor Futuro",
            },
            {
                name: "Prestações Fixas",
            },
            {
                name: "Numero de Periodos",
            },
        ],
        activeFeature: 0,
        n: null,
        j: null,
        pv: null,
        fv: null


    },
    methods: {
        clear: function (event) {
            this.fv = this.j = this.pv = this.n = null;
            event.preventDefault();
        },
        change_feature: function (id) {
            this.activeFeature = id;
        },
        validate: function (fields) {
            for (var i = 0; i < fields.length; i++) {
                field = fields[i];
                if (isNaN(field) || field == null || field == '') {
                    return false;
                }
            }
            return true;
        },
        validate_vp_f1: function () {
            return this.validate([this.pv, this.j, this.n]);
        },
        validate_vp_f0: function () {
            return this.validate([this.fv, this.j, this.n]);
        },
        validate_vp_f2: function(){
            return this.validate([this.pv, this.j, this.n]);
        },
        validate_vp_f3: function(){
            return this.validate([this.pv, this.fv, this.j]);
        },
        calc_f0: function () {
            return this.fv / Math.pow((1 + (this.j / 100)), this.n);
        },
        calc_f1: function () {
            return Math.pow(1 + (this.j / 100), this.n) * this.pv;
        },
        calc_f2:function(){
            return this.pv*((Math.pow((1 + (this.j / 100)), this.n) * (this.j/100))/(Math.pow((1 + (this.j / 100)), this.n) - 1));
        },
        calc_f3: function(){
            return Math.log((this.fv/this.pv))/Math.log(1 + (this.j/100));
        }

        
    }
});