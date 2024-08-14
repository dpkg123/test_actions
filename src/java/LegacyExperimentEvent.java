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
 * GENERATED Data contract class LegacyExperimentEvent.
 *
 * "An event to be sent at exposure time of an experiment. New experiments should use ExperimentEvent"
 */
public class LegacyExperimentEvent extends BaseExperimentEvent
{
    private String eventSchemaVersion = "20";
    
    private Boolean isAATest;
    
    /**
     * Creates a new instance of the LegacyExperimentEvent class.
     *
     * @param buildType    App build type
     * @param privacyTag    Privacy tag as defined by Office Privacy Framework guidelines. Note: not logged in telemetry.
     * @param privacyDataType    Privacy data type defined by telemetry loggers per MOJ Privacy requirements. Note: not logged in telemetry.
     * @param experiment    Name of the experiment, as named in the ECS ramp
     * @param variant    Specifies bucket (control, A, B, etc.) as assigned from ECS ramp
     * @param assignmentId    Identifies the assigned user or device. By default we will use the userId (CID for consumer, PUID for business)
     * @param account    User account information
     * @param isAATest    True if an AA test is being conducted
     */
    public LegacyExperimentEvent(
            Boolean isAATest,
            TelemetryAccountDetails account,
            String assignmentId,
            String variant,
            String experiment,
            PrivacyDataType privacyDataType,
            PrivacyTagType privacyTag,
            BuildType buildType) {
        super(account, assignmentId, variant, experiment, privacyDataType, privacyTag, buildType);
        this.isAATest = isAATest;
    }
    
    /**
     * Gets the EventSchemaVersion property.
     */
    @Override
    public String getEventSchemaVersion() {
        return this.eventSchemaVersion;
    }
    
    /**
     * Gets the IsAATest property.
     */
    public Boolean getIsAATest() {
        return this.isAATest;
    }
    
    /**
     * Sets the IsAATest property. "True if an AA test is being conducted"
     */
    public void setIsAATest(Boolean value) {
        this.isAATest = value;
    }
    

    /**
     * Retrieves the properties as a Map
     */
    public Map<String, String> getProperties() {
        Map<String, String> map = super.getProperties();

        if (eventSchemaVersion != null) {
            map.put("EventSchemaVersion", String.valueOf(this.eventSchemaVersion));
        }
        
        if (isAATest != null) {
            map.put("IsAATest", String.valueOf(this.isAATest));
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

        parentBlankProperties.remove(eventSchemaVersion);
        if (eventSchemaVersion == null) {
            blankProperties.add("eventSchemaVersion");
        }
        if (isAATest == null) {
            blankProperties.add("isAATest");
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
        return "expmobile";
    }
}
