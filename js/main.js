const hora = {
    h : 00,
    m: 00,
    s: 00,
    ms: 000,
    addMs () {
        hora.ms += 1
        if (hora.ms == 1000) {
            hora.ms = 000;
            hora.s += 1;
        }if (hora.s == 60) {
            hora.s = 00;
            hora.m += 1;
        }if (hora.m == 60) {
            hora.m = 00;
            hora.h += 1;
        }
    }
}
const stopWatch = {
    started : false,
    help () { 
        console.log('stopWatch.start() : Starts the stopwatch.')
        console.log('stopWatch.stop() : Stops the stopwatch.') 
        console.log('stopWatch.reset() : Resets the stopwatch.') 
        console.log('stopWatch.duration() : Prints the stopwatch current time.')},
    duration () {
        console.log(`${hora.h} Horas: ${hora.m} Minutos: ${hora.s} Segundos: ${hora.ms} Milisegundos`)
    },
    reset () {
        hora.ms = 000;
        hora.s = 00;
        hora.m = 00;
        hora.h = 00;
        console.log('Cronometro a cero!')
    },
    start () {
        if (stopWatch.started == false) {
        intervalID = setInterval(hora.addMs, 1)
        stopWatch.started = true 
        console.log('Cronometro iniciado!')}
        else {throw new Error ('Cronometro ya iniciado!!!!!')}
    },
    stop () {
        if (stopWatch.started == true) {
        clearInterval(intervalID)
        stopWatch.started = false 
        console.log('Cronometro detenido!')}
        else {throw new Error ('Cronometro ya detenido!!!!!')}
    }
}