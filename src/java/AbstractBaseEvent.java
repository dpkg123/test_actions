package com.microsoft.odsp.mobile;

import java.lang.reflect.Type;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public abstract class AbstractBaseEvent implements ITelemetryEvent {
    private final Date mEventCreated;
    private Collection<Type> mSupportedChannels;

    public AbstractBaseEvent() {
	    mEventCreated = new Date();
	}

	/**
     * Get time when event was created
     *
     * @return event time
     */
    public Date getEventDate() {
		return mEventCreated;
	}

    /**
     * Set the supported channels of the event.
     *
     * @param channels the channels this event should be sent to
     */
    public void setSupportedChannels(Collection<Type> channels) {
        mSupportedChannels = channels;
    }

    /**
     * Get the channels this event should be sent to
     *
     * @return list of supported channels
     */
    public Collection<Type> getSupportedChannels() {
        return mSupportedChannels;
    }

    /**
     * @return  map of event properties with double values
     */
    public Map<String, Double> getMetrics() {
        return new HashMap<>();
    }

    /**
     * Indicates if event should be sent in case it's the only event in a session
     * @return true if yes, should send
     */
    public boolean shouldSendIfOnlyEventInSession() { return true; }

    /**
     * @return  event name
     */
    public abstract String getName();
    
    /**
     * @return  map of event properties with string values
     */
    public abstract Map<String, String> getProperties();

    /**
     * Send one of (sampleRate) events
     * @return the sample rate of the event
     */
    public abstract int getSampleRate();

    /**
     * @return the category of the event...aka table it can be queried from
     */
    public abstract String getTableName();
}