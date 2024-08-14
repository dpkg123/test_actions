package com.microsoft.odsp.mobile;

import java.lang.reflect.Type;
import java.util.Collection;
import java.util.Date;
import java.util.Map;


/**
 * Interface for all instrumentation events
 */
public interface ITelemetryEvent {

    /**
     * @return  map of event properties with string values
     */
    public Map<String, String> getProperties();

    /**
     * @return  map of event properties with double values
     */
    public Map<String, Double> getMetrics();

	/**
     * Get time when event was created
     *
     * @return event time
     */
    public Date getEventDate();

    /**
     * @return  event name
     */
    public String getName();

	/**
     * Get the channels this event should be sent to
     *
     * @return list of supported channels
     */
    public Collection<Type> getSupportedChannels();

    /**
     * Send one of (sampleRate) events
     *
     * @return the sample rate of the event
     */
    public int getSampleRate();

    /**
     * @return the category of the event...aka table it can be queried from
     */
    public String getTableName();

    /**
     * Indicates if event should be sent in case it's the only event in a session
     * @return true if yes, should send
     */
    public boolean shouldSendIfOnlyEventInSession();
}