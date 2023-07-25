/**
 * Measurement Spec, via Event Model
 */
interface Measurement {
    name: String;
    description: String;
    unit: String;
    type: InstrumentType;
    valueType: ValueType;
}

enum InstrumentType {
  COUNTER = 'COUNTER',
  HISTOGRAM = 'HISTOGRAM',
  UP_DOWN_COUNTER = 'UP_DOWN_COUNTER',
  OBSERVABLE_COUNTER = 'OBSERVABLE_COUNTER',
  OBSERVABLE_GAUGE = 'OBSERVABLE_GAUGE',
  OBSERVABLE_UP_DOWN_COUNTER = 'OBSERVABLE_UP_DOWN_COUNTER',
}
 
enum ValueType {
  INT,
  DOUBLE,
}
