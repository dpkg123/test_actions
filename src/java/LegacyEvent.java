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
 * GENERATED Data contract class LegacyEvent.
 *
 * "A wrapper for a legacy event"
 */
public class LegacyEvent extends TelemetryEvent
{
    private TelemetryEventType eventType = TelemetryEventType.Legacy;
    
    private String name = "Legacy";
    
    private String legacyEventName;
    
    private PrivacyDataType privacyDataType = PrivacyDataType.ProductAndServiceUsage;
    
    private TelemetryAccountDetails account;
    
    private Map<String, String> additionalProperties;
    
    /**
     * Creates a new instance of the LegacyEvent class.
     *
     * @param buildType    App build type
     * @param privacyTag    Privacy tag as defined by Office Privacy Framework guidelines. Note: not logged in telemetry.
     * @param privacyDataType    Privacy data type defined by telemetry loggers per MOJ Privacy requirements. Note: not logged in telemetry.
     * @param legacyEventName    Name of the legacy event. We are re-using Id 1 to get this into the event identity rather than the name property.
     */
    public LegacyEvent(
            String legacyEventName,
            PrivacyDataType privacyDataType,
            PrivacyTagType privacyTag,
            BuildType buildType) {
        super(privacyDataType, privacyTag, buildType);
        this.legacyEventName = legacyEventName;
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
     * Gets the LegacyEventName property.
     */
    public String getLegacyEventName() {
        return this.legacyEventName;
    }
    
    /**
     * Sets the LegacyEventName property. "Name of the legacy event. We are re-using Id 1 to get this into the event identity rather than the name property."
     */
    public void setLegacyEventName(String value) {
        this.legacyEventName = value;
    }
    
    /**
     * Gets the PrivacyDataType property.
     */
    @Override
    public PrivacyDataType getPrivacyDataType() {
        return this.privacyDataType;
    }
    
    /**
     * Sets the PrivacyDataType property. "Legacy usage events are all service usage."
     */
    public void setPrivacyDataType(PrivacyDataType value) {
        this.privacyDataType = value;
    }
    
    /**
     * Gets the Account property.
     */
    public TelemetryAccountDetails getAccount() {
        return this.account;
    }
    
    /**
     * Sets the Account property. "The account performing the event"
     */
    public void setAccount(TelemetryAccountDetails value) {
        this.account = value;
    }
    
    /**
     * Gets the AdditionalProperties property.
     */
    @Override
    public Map<String, String> getAdditionalProperties() {
        if (this.additionalProperties == null) {
            this.additionalProperties = new LinkedHashMap<String, String>();
        }
        return this.additionalProperties;
    }
    
    /**
     * Sets the AdditionalProperties property. "Additional properties to be included with the event."
     */
    public void setAdditionalProperties(Map<String, String> value) {
        this.additionalProperties = value;
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
        
        if (legacyEventName != null) {
            map.put("LegacyEventName", String.valueOf(this.legacyEventName));
        }
        
        if (privacyDataType != null) {
            map.put("PrivacyDataType", privacyDataType.name());
        }
        
        if (account != null) {
            map.putAll(account.getProperties());
        }
        
        if (additionalProperties != null) {
            for (Map.Entry<?, ?> entry : this.additionalProperties.entrySet())
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
        if (legacyEventName == null) {
            blankProperties.add("legacyEventName");
        }
        parentBlankProperties.remove(privacyDataType);
        if (privacyDataType == null) {
            blankProperties.add("privacyDataType");
        }
        blankProperties.addAll(parentBlankProperties);
        return blankProperties;
    }


    /**
     * Retrieves the event's proper name
     */
    @Override
    public String eventIdentity() {
        return String.format("%s/%s", String.valueOf(getEventType()), String.valueOf(getLegacyEventName()));
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
        return "usagemobile";
    }
}
