/*
 * Generated using https://github.com/Microsoft/bond
*/
package com.microsoft.odsp.mobile;

import com.microsoft.odsp.mobile.MobileEnums.*;
import java.io.IOException;
import java.io.Writer;
import java.util.Date;
import java.util.Map;
import java.util.List;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.ArrayList;
import java.util.Set;
import java.util.HashSet;

/**
 * GENERATED Data contract class QoSXplatEvent.
 *
 * "An event representing a reliability, latency, or quality element that comes from the Cross Plat layer"
 */
public class QoSXplatEvent extends TelemetryEvent
{
    private TelemetryEventType eventType = TelemetryEventType.QoS;
    
    private String name = "XPlat";
    
    private EnvironmentType environment;
    
    private TelemetryAccountDetails account;
    
    private Map<String, String> xplatProperties;
    
    /**
     * Creates a new instance of the QoSXplatEvent class.
     *
     * @param buildType    App build type
     * @param privacyTag    Privacy tag as defined by Office Privacy Framework guidelines. Note: not logged in telemetry.
     * @param privacyDataType    Privacy data type defined by telemetry loggers per MOJ Privacy requirements. Note: not logged in telemetry.
     * @param environment    The environment type, specified if known
     */
    public QoSXplatEvent(
            EnvironmentType environment,
            PrivacyDataType privacyDataType,
            PrivacyTagType privacyTag,
            BuildType buildType) {
        super(privacyDataType, privacyTag, buildType);
        this.environment = environment;
    }
    
    /**
     * Gets the EventType property.
     */
    @Override
    public TelemetryEventType getEventType() {
        return this.eventType;
    }
    
    /**
     * Gets the Name property.
     */
    @Override
    public String getName() {
        return this.name;
    }
    
    /**
     * Gets the Environment property.
     */
    public EnvironmentType getEnvironment() {
        return this.environment;
    }
    
    /**
     * Sets the Environment property. "The environment type, specified if known"
     */
    public void setEnvironment(EnvironmentType value) {
        this.environment = value;
    }
    
    /**
     * Gets the Account property.
     */
    public TelemetryAccountDetails getAccount() {
        return this.account;
    }
    
    /**
     * Sets the Account property. "The account performing the event, it must be specified unless the operation being measured occurs before an account is authenticated"
     */
    public void setAccount(TelemetryAccountDetails value) {
        this.account = value;
    }
    
    /**
     * Gets the XplatProperties property.
     */
    public Map<String, String> getXplatProperties() {
        if (this.xplatProperties == null) {
            this.xplatProperties = new LinkedHashMap<String, String>();
        }
        return this.xplatProperties;
    }
    
    /**
     * Sets the XplatProperties property. "Properties returned from Cross Plat."
     */
    public void setXplatProperties(Map<String, String> value) {
        this.xplatProperties = value;
    }
    

    /**
     * Retrieves the properties as a Map
     */
    public Map<String, String> getProperties() {
        Map<String, String> map = super.getProperties();

        if (eventType != null) {
            map.put("EventType", eventType.name());
        }
        
        if (name != null) {
            map.put("Name", String.valueOf(this.name));
        }
        
        if (environment != null) {
            map.put("Environment", environment.name());
        }
        
        if (account != null) {
            map.putAll(account.getProperties());
        }
        
        if (xplatProperties != null) {
            for (Map.Entry<?, ?> entry : this.xplatProperties.entrySet())
                map.put( String.format("%s%s", "", entry.getKey()), String.valueOf(entry.getValue()));
        }
        
        map.put( "EventName", this.eventIdentity() );

        return map;
    }


    /**
     * Returns a set with any required properties having current values set to null
     */
    public Set<String> getEmptyProperties() {
        Set<String> blankProperties = new HashSet<String>();
        Set<String> parentBlankProperties = super.getEmptyProperties();

        parentBlankProperties.remove(eventType);
        if (eventType == null) {
            blankProperties.add("eventType");
        }
        parentBlankProperties.remove(name);
        if (name == null) {
            blankProperties.add("name");
        }
        if (environment == null) {
            blankProperties.add("environment");
        }
        blankProperties.addAll(parentBlankProperties);
        return blankProperties;
    }


    /**
     * Retrieves the event's proper name
     */
    @Override
    public String eventIdentity() {
        return String.format("%s/%s", String.valueOf(getEventType()), String.valueOf(getName()));
    }

    /**
     * Optionally initializes fields for the current context.
     */
    protected void InitializeFields() {
        
    }

    /**
     * Retrieve the backing table for this event.
     */
    @Override
    public String getTableName() {
        return "qosmobile";
    }
}
