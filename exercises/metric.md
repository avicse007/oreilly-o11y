# Metrics SDK Usage

For this exercise, use an OTel language SDK to write a file that has all the SDK initialize code in it. 

This would include: 
1. Configuring a `Resource` to have a service name. 
2. Configuring a `MetricReader` with an `Exporter`.
3. Initializing a `MetricProvider`.
4. Registering the `MetricReader` with a `MeterProvider`. 
5. Globalize the `MeterProvider`.
