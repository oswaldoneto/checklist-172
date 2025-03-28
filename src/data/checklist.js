export const checklistData = {
  preflight: {
    title: 'PREFLIGHT',
    items: [
      { id: 'pf-1', text: 'CERT/DOC............................ON BOARD', checked: false },
      { id: 'pf-2', text: 'TACH/HOBBS...........................RECORD', checked: false },
      { id: 'pf-3', text: 'FIRE EXT............................PIN/GREEN', checked: false },
      { id: 'pf-4', text: 'CONTROL LOCK.....................REMOVE', checked: false },
      { id: 'pf-5', text: 'MAGS...........................................OFF', checked: false },
      { id: 'pf-6', text: 'MIXTURE.......................................LEAN', checked: false },
      { id: 'pf-7', text: 'CIRCUIT BRKRS................................IN', checked: false },
      { id: 'pf-8', text: 'ALT STATIC...........................NORMAL', checked: false },
      { id: 'pf-9', text: 'MASTER SWITCH............................ON', checked: false },
      { id: 'pf-10', text: 'AVIONICS FAN..........................CHECK', checked: false },
      { id: 'pf-11', text: 'FLAPS.......................................DOWN', checked: false },
      { id: 'pf-12', text: 'FUEL QUANTITY........................CHECK', checked: false },
      { id: 'pf-13', text: 'LIGHTS....................................CHECK', checked: false },
      { id: 'pf-14', text: 'PITOT HEAT..............................CHECK', checked: false },
      { id: 'pf-15', text: 'MASTER SWITCH............................OFF', checked: false },
      { id: 'pf-16', text: 'EXTERIOR.............................COMPLETE', checked: false }
    ]
  },
  beforeStarting: {
    title: 'BEFORE STARTING ENGINE',
    items: [
      { id: 'bs-1', text: 'PREFLIGHT..........................COMPLETE', checked: false },
      { id: 'bs-2', text: 'CHOCKS..............................REMOVED', checked: false },
      { id: 'bs-3', text: 'AVIONICS MASTER........................OFF', checked: false },
      { id: 'bs-4', text: 'PAX BRIEF..........................COMPLETE', checked: false },
      { id: 'bs-5', text: 'SEATS.......................ADJUST/LOCKED', checked: false },
      { id: 'bs-6', text: 'SEAT BELTS...............FASTEN/CHK LOCK', checked: false },
      { id: 'bs-7', text: 'ALL ELECTRICAL............................OFF', checked: false },
      { id: 'bs-8', text: 'FUEL SELECTOR...........................BOTH', checked: false },
      { id: 'bs-9', text: 'FUEL SHUTOFF.......................PUSH IN', checked: false }
    ]
  },
  engineStart: {
    title: 'ENGINE START',
    items: [
      { id: 'es-1', text: 'MIXTURE....................................LEAN', checked: false },
      { id: 'es-2', text: 'THROTTLE...................OPEN 1/4 INCH', checked: false },
      { id: 'es-3', text: 'STBY BATT...............TEST 20 SECS, ARM', checked: false },
      { id: 'es-4', text: 'ENGINE INDICATION..........NO RED X\'S', checked: false },
      { id: 'es-5', text: 'BUS E VOLTS................24 V MINIMUM', checked: false },
      { id: 'es-6', text: 'M BUS VOLTS.................1.5 V OR LESS', checked: false },
      { id: 'es-7', text: 'BATT S ANNUCTR..........NOT SHOWN', checked: false },
      { id: 'es-8', text: 'STBY BATT ANNUCTR.............SHOWN', checked: false },
      { id: 'es-9', text: 'MASTER SWITCH............................ON', checked: false },
      { id: 'es-10', text: 'BEACON LIGHT..............................ON', checked: false }
    ]
  },
  enginePrime: {
    title: 'ENGINE PRIME PROCEDURE',
    items: [
      { id: 'ep-1', text: 'FUEL PUMP....................................ON', checked: false },
      { id: 'ep-2', text: 'MIXTURE........RICH till fuel flow then LEAN', checked: false },
      { id: 'ep-3', text: 'FUEL PUMP....................................OFF', checked: false },
      { id: 'ep-4', text: 'PROP AREA...............................CLEAR', checked: false },
      { id: 'ep-5', text: 'BRAKES.....................................HOLD', checked: false },
      { id: 'ep-6', text: 'STARTER................................ENGAGE', checked: false }
    ]
  },
  onceEngineStarts: {
    title: 'Once Engine Starts',
    items: [
      { id: 'oes-1', text: 'MIXTURE............................FULL RICH', checked: false },
      { id: 'oes-2', text: 'THROTTLE............................800-1000', checked: false },
      { id: 'oes-3', text: 'OIL PRESSURE.......................IN GREEN', checked: false }
    ]
  },
  avionicsSetup: {
    title: 'AVIONICS SETUP',
    items: [
      { id: 'as-1', text: 'AVIONICS MASTER...........................ON', checked: false },
      { id: 'as-2', text: 'FLAPS.........................................UP', checked: false },
      { id: 'as-3', text: 'AMPS.........................CHECK POSITIVE', checked: false },
      { id: 'as-4', text: 'LOW VOLTS ANUCTR.........NOT SHOWN', checked: false }
    ]
  },
  preTaxi: {
    title: 'PRE-TAXI',
    items: [
      { id: 'pt-1', text: 'RADIOS.......................................SET', checked: false },
      { id: 'pt-2', text: 'WEATHER................................OBTAIN', checked: false },
      { id: 'pt-3', text: 'WIND.........................SET W/ HDG BUG', checked: false },
      { id: 'pt-4', text: 'ALTIMETERS, PFD, STBY, AP..............SET', checked: false },
      { id: 'pt-5', text: 'G1000 ALT SELECT...........................SET', checked: false },
      { id: 'pt-6', text: 'STBY INSTRUMENTS.....................CHECK', checked: false },
      { id: 'pt-7', text: 'FUEL QTY...........VERIFY LEVEL CORRECT', checked: false },
      { id: 'pt-8', text: 'AIRSPEED...................................ZERO', checked: false },
      { id: 'pt-9', text: 'VSI...........................................ZERO', checked: false },
      { id: 'pt-10', text: 'GPS FLIGHT PLAN............................SET', checked: false },
      { id: 'pt-11', text: 'LIGHTS...........................AS REQUIRED', checked: false },
      { id: 'pt-12', text: 'MIXTURE....................................LEAN', checked: false }
    ]
  },
  whileTaxiing: {
    title: 'WHILE TAXIING',
    items: [
      { id: 'wt-1', text: 'BRAKES...................................CHECK', checked: false },
      { id: 'wt-2', text: 'TURN COORD............................CHECK', checked: false }
    ]
  },
  groundCheck: {
    title: 'GROUND CHECK',
    items: [
      { id: 'gc-1', text: '*POINT AIRPLANE INTO WIND*', checked: false },
      { id: 'gc-2', text: 'BRAKES...............................SET/HOLD', checked: false },
      { id: 'gc-3', text: 'CONTROLS..................FREE/CORRECT', checked: false },
      { id: 'gc-4', text: 'MIXTURE....................................RICH', checked: false },
      { id: 'gc-5', text: 'THROTTLE............................1800 RPM', checked: false },
      { id: 'gc-6', text: 'ENGINE INSTRUMENTS........NO RED X\'S', checked: false },
      { id: 'gc-7', text: 'VACUUM................................CHECK', checked: false },
      { id: 'gc-8', text: 'ALTERNATOR..............................TEST', checked: false },
      { id: 'gc-9', text: 'MAG CHECK................MAX DROP 125', checked: false },
      { id: 'gc-10', text: 'THROTTLE..........CHECK IDLE, THEN 800-1000', checked: false }
    ]
  },
  beforeTakeoff: {
    title: 'BEFORE TAKEOFF',
    items: [
      { id: 'bt-1', text: 'RADIOS.......................................SET', checked: false },
      { id: 'bt-2', text: 'HDG INDICATOR........................CHECK', checked: false },
      { id: 'bt-3', text: 'MIXTURE............................FULL RICH', checked: false },
      { id: 'bt-4', text: 'SEAT BELTS.........................FASTENED', checked: false },
      { id: 'bt-5', text: 'ANUNNCIATORS........................CLEAR', checked: false },
      { id: 'bt-6', text: 'DOOR/WINDOWS..................LATCHED', checked: false },
      { id: 'bt-7', text: 'FLAPS.........................................SET', checked: false },
      { id: 'bt-8', text: 'TRIM.............................SET FOR TKOFF', checked: false },
      { id: 'bt-9', text: 'TRANSPONDER..............................SET', checked: false },
      { id: 'bt-10', text: 'LIGHTS..................LANDING & STROBE', checked: false }
    ]
  },
  takeoff: {
    title: 'TAKEOFF',
    items: [
      { id: 'to-1', text: 'THROTTLE..........................FULL OPEN', checked: false },
      { id: 'to-2', text: 'ENGINE INST..............................CHECK', checked: false },
      { id: 'to-3', text: 'ROTATE....................................55 KIAS', checked: false },
      { id: 'to-4', text: 'Vx...........................................62 KIAS', checked: false },
      { id: 'to-5', text: 'Vy...........................................74 KIAS', checked: false }
    ]
  },
  enrouteClimb: {
    title: 'ENROUTE CLIMB',
    items: [
      { id: 'ec-1', text: 'AIRSPEED........................75-85 KIAS', checked: false },
      { id: 'ec-2', text: 'MIXTURE.....................AS REQUIRED', checked: false },
      { id: 'ec-3', text: 'LIGHTS........................AS REQUIRED', checked: false }
    ]
  },
  cruise: {
    title: 'CRUISE',
    items: [
      { id: 'cr-1', text: 'POWER......................23-2400 RPM', checked: false },
      { id: 'cr-2', text: 'TRIM........................AS REQUIRED', checked: false },
      { id: 'cr-3', text: 'MIXTURE............LEAN ABOVE 3000\'', checked: false }
    ]
  },
  descent: {
    title: 'DESCENT',
    items: [
      { id: 'ds-1', text: 'MIXTURE.................................RICH', checked: false },
      { id: 'ds-2', text: 'WEATHER............................OBTAIN', checked: false },
      { id: 'ds-3', text: 'LANDING LIGHT...........................ON', checked: false }
    ]
  },
  beforeLanding: {
    title: 'BEFORE LANDING',
    items: [
      { id: 'bl-1', text: 'APP BRIEF......................COMPLETE', checked: false },
      { id: 'bl-2', text: 'FUEL SELECTOR......................BOTH', checked: false },
      { id: 'bl-3', text: 'MIXTURE................................RICH', checked: false },
      { id: 'bl-4', text: 'SEATBELTS.....................FASTENED', checked: false },
      { id: 'bl-5', text: 'FINAL APP SPEED...............65 KIAS', checked: false }
    ]
  },
  afterLanding: {
    title: 'AFTER LANDING',
    items: [
      { id: 'al-1', text: 'FLAPS.........................................UP', checked: false },
      { id: 'al-2', text: 'STROBES...................................OFF', checked: false },
      { id: 'al-3', text: 'LANDING LIGHT...........................OFF', checked: false },
      { id: 'al-4', text: 'PITOT HEAT................................OFF', checked: false },
      { id: 'al-5', text: 'TRIM.........................................SET', checked: false },
      { id: 'al-6', text: 'TAXI LIGHT.................................ON', checked: false },
      { id: 'al-7', text: 'MIXTURE..................................LEAN', checked: false }
    ]
  },
  shutdown: {
    title: 'SHUTDOWN',
    items: [
      { id: 'shutdown1', text: 'AVIONICS MASTER SWITCH...............OFF', checked: false },
      { id: 'shutdown2', text: 'MIXTURE.............................IDLE CUT OFF', checked: false },
      { id: 'shutdown3', text: 'MAGNETOS/KEY........................OFF', checked: false },
      { id: 'shutdown4', text: 'MASTER SWITCH.......................OFF', checked: false },
      { id: 'shutdown5', text: 'CONTROL LOCK.......................INSTALL', checked: false }
    ]
  }
} 