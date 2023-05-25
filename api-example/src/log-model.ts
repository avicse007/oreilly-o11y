export interface LogRecord {
    /**
     * The time when the log record occurred as UNIX Epoch time in nanoseconds.
     */
    timestamp?: number;
    /**
     * Numerical value of the severity.
     */
    severityNumber?: SeverityNumber;
    /**
     * The severity text.
     */
    severityText?: string;
    /**
     * A value containing the body of the log record.
     */
    body?: string;
    /**
     * Attributes that define the log record.
     */
    attributes?: Attributes;
    /**
     * The Context associated with the LogRecord.
     */
    context?: Context;
}