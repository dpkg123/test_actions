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
 * GENERATED Data contract class ExperimentEvent.
 *
 * "An event to be sent at exposure time of an experiment"
 */
public class ExperimentEvent extends BaseExperimentEvent
{
    private String eventSchemaVersion = "30";
    
    private String experimentId;
    
    private String eCSConfigTags;
    
    /**
     * Creates a new instance of the ExperimentEvent class.
     *
     * @param buildType    App build type
     * @param privacyTag    Privacy tag as defined by Office Privacy Framework guidelines. Note: not logged in telemetry.
     * @param privacyDataType    Privacy data type defined by telemetry loggers per MOJ Privacy requirements. Note: not logged in telemetry.
     * @param experiment    Name of the experiment, as named in the ECS ramp
     * @param variant    Specifies bucket (control, A, B, etc.) as assigned from ECS ramp
     * @param assignmentId    Identifies the assigned user or device. By default we will use the userId (CID for consumer, PUID for business)
     * @param account    User account information
     * @param experimentId    Experiment Identifier as assigned and found in ECS experiment page
     * @param eCSConfigTags    NRT config tags from ECS that get appended for every event in this stream 
     */
    public ExperimentEvent(
            String eCSConfigTags,
            String experimentId,
            TelemetryAccountDetails account,
            String assignmentId,
            String variant,
            String experiment,
            PrivacyDataType privacyDataType,
            PrivacyTagType privacyTag,
            BuildType buildType) {
        super(account, assignmentId, variant, experiment, privacyDataType, privacyTag, buildType);
        this.experimentId = experimentId;
        this.eCSConfigTags = eCSConfigTags;
    }
    
    /**
     * Gets the EventSchemaVersion property.
     */
    @Override
    public String getEventSchemaVersion() {
        return this.eventSchemaVersion;
    }
    
    /**
     * Gets the ExperimentId property.
     */
    public String getExperimentId() {
        return this.experimentId;
    }
    
    /**
     * Sets the ExperimentId property. "Experiment Identifier as assigned and found in ECS experiment page"
     */
    public void setExperimentId(String value) {
        this.experimentId = value;
    }
    
    /**
     * Gets the ECSConfigTags property.
     */
    public String getECSConfigTags() {
        return this.eCSConfigTags;
    }
    
    /**
     * Sets the ECSConfigTags property. "NRT config tags from ECS that get appended for every event in this stream "
     */
    public void setECSConfigTags(String value) {
        this.eCSConfigTags = value;
    }
    

    /**
     * Retrieves the properties as a Map
     */
    public Map<String, String> getProperties() {
        Map<String, String> map = super.getProperties();

        if (eventSchemaVersion != null) {
            map.put("EventSchemaVersion", String.valueOf(this.eventSchemaVersion));
        }
        
        if (experimentId != null) {
            map.put("ExperimentId", String.valueOf(this.experimentId));
        }
        
        if (eCSConfigTags != null) {
            map.put("ECSConfigTags", String.valueOf(this.eCSConfigTags));
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
        if (experimentId == null) {
            blankProperties.add("experimentId");
        }
        if (eCSConfigTags == null) {
            blankProperties.add("eCSConfigTags");
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
