"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Perido_1 = require("../model/Perido");
var PeriodoMapper = /** @class */ (function () {
    function PeriodoMapper() {
    }
    PeriodoMapper.periodoJSONToPeriodo = function (periodoJSON) {
        var periodo = new Perido_1.Periodo();
        var per = periodoJSON;
        var horasMinutosEmpieza = per.Empieza.split("T", 2)[1].split(":", 2);
        var horasMinutosAcaba = per.Acaba.split("T", 2)[1].split(":", 2);
        periodo.empiezaHora = horasMinutosEmpieza[0];
        periodo.empiezaMinuto = horasMinutosEmpieza[1];
        periodo.acabaHora = horasMinutosAcaba[0];
        periodo.acabaMinuto = horasMinutosAcaba[1];
        if (per.Dia) {
            periodo.dia = per.Dia;
        }
        return periodo;
    };
    return PeriodoMapper;
}());
exports.PeriodoMapper = PeriodoMapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyaW9kb01hcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBlcmlvZG9NYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBMEM7QUFHMUM7SUFBQTtJQXFCQSxDQUFDO0lBcEJpQixrQ0FBb0IsR0FBbEMsVUFBbUMsV0FBVztRQUUxQyxJQUFJLE9BQU8sR0FBVyxJQUFJLGdCQUFPLEVBQUUsQ0FBQztRQUNwQyxJQUFJLEdBQUcsR0FBRyxXQUFXLENBQUM7UUFFdEIsSUFBSSxtQkFBbUIsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWpFLE9BQU8sQ0FBQyxXQUFXLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsT0FBTyxDQUFDLGFBQWEsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUvQyxPQUFPLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFM0MsSUFBRyxHQUFHLENBQUMsR0FBRyxFQUFDO1lBQ1AsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1NBQ3pCO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBlcmlvZG8gfSBmcm9tIFwiLi4vbW9kZWwvUGVyaWRvXCI7XG5pbXBvcnQgeyBEYXlzRW51bSB9IGZyb20gXCIuLi91dGlscy9EYXlzRW51bVwiO1xuXG5leHBvcnQgY2xhc3MgUGVyaW9kb01hcHBlciB7XG4gICAgcHVibGljIHN0YXRpYyBwZXJpb2RvSlNPTlRvUGVyaW9kbyhwZXJpb2RvSlNPTik6IFBlcmlvZG97XG5cbiAgICAgICAgbGV0IHBlcmlvZG86UGVyaW9kbyA9IG5ldyBQZXJpb2RvKCk7XG4gICAgICAgIGxldCBwZXIgPSBwZXJpb2RvSlNPTjtcblxuICAgICAgICBsZXQgaG9yYXNNaW51dG9zRW1waWV6YSA9IHBlci5FbXBpZXphLnNwbGl0KFwiVFwiLCAyKVsxXS5zcGxpdChcIjpcIiwgMik7XG4gICAgICAgIGxldCBob3Jhc01pbnV0b3NBY2FiYSA9IHBlci5BY2FiYS5zcGxpdChcIlRcIiwgMilbMV0uc3BsaXQoXCI6XCIsIDIpO1xuXG4gICAgICAgIHBlcmlvZG8uZW1waWV6YUhvcmEgPSBob3Jhc01pbnV0b3NFbXBpZXphWzBdO1xuICAgICAgICBwZXJpb2RvLmVtcGllemFNaW51dG8gPSBob3Jhc01pbnV0b3NFbXBpZXphWzFdO1xuXG4gICAgICAgIHBlcmlvZG8uYWNhYmFIb3JhID0gaG9yYXNNaW51dG9zQWNhYmFbMF07XG4gICAgICAgIHBlcmlvZG8uYWNhYmFNaW51dG8gPSBob3Jhc01pbnV0b3NBY2FiYVsxXTtcblxuICAgICAgICBpZihwZXIuRGlhKXtcbiAgICAgICAgICAgIHBlcmlvZG8uZGlhID0gcGVyLkRpYTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwZXJpb2RvO1xuICAgIH1cbn0iXX0=