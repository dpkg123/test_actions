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
 * GENERATED Data contract class ToggleOfflineEvent.
 *
 * "User action toggle offline state"
 */
public class ToggleOfflineEvent extends ActionEvent
{
    private String name = "ToggleOffline";
    
    private Boolean makeOffline;
    
    /**
     * Creates a new instance of the ToggleOfflineEvent class.
     *
     * @param buildType    App build type
     * @param privacyTag    Privacy tag as defined by Office Privacy Framework guidelines. Note: not logged in telemetry.
     * @param privacyDataType    Privacy data type defined by telemetry loggers per MOJ Privacy requirements. Note: not logged in telemetry.
     * @param account    The account performing the event
     * @param completionStatus    Did the action complete
     * @param tab    Which pivot was this action called from
     * @param actionEntryPoint    Entry point for Action
     * @param items    Summary of items being acted upon
     * @param makeOffline    If new state is offline
     */
    public ToggleOfflineEvent(
            Boolean makeOffline,
            TelemetryItemSetDetails items,
            ActionEntryPointType actionEntryPoint,
            TabViewType tab,
            CompletionType completionStatus,
            TelemetryAccountDetails account,
            PrivacyDataType privacyDataType,
            PrivacyTagType privacyTag,
            BuildType buildType) {
        super(items, actionEntryPoint, tab, completionStatus, account, privacyDataType, privacyTag, buildType);
        this.makeOffline = makeOffline;
    }
    
    /**
     * Gets the Name property.
     */
    @Override
    public String getName() {
        return this.name;
    }
    
    /**
     * Gets the MakeOffline property.
     */
    public Boolean getMakeOffline() {
        return this.makeOffline;
    }
    
    /**
     * Sets the MakeOffline property. "If new state is offline"
     */
    public void setMakeOffline(Boolean value) {
        this.makeOffline = value;
    }
    

    /**
     * Retrieves the properties as a Map
     */
    public Map<String, String> getProperties() {
        Map<String, String> map = super.getProperties();

        if (name != null) {
            map.put("Name", String.valueOf(this.name));
        }
        
        if (makeOffline != null) {
            map.put("MakeOffline", String.valueOf(this.makeOffline));
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

        parentBlankProperties.remove(name);
        if (name == null) {
            blankProperties.add("name");
        }
        if (makeOffline == null) {
            blankProperties.add("makeOffline");
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

}
