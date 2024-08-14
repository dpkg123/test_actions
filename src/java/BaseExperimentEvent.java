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
 * GENERATED Data contract class BaseExperimentEvent.
 *
 * "An event to be sent at exposure time of an experiment"
 */
public class BaseExperimentEvent extends TelemetryEvent
{
    private TelemetryEventType eventType = TelemetryEventType.Experiment;
    
    private String name = "Experiment";
    
    private PrivacyTagType privacyTag = PrivacyTagType.RequiredServiceData;
    
    private PrivacyDataType privacyDataType = PrivacyDataType.ProductAndServiceUsage;
    
    private String experiment;
    
    private String variant;
    
    private ExperimentAssignmentType assignmentType = ExperimentAssignmentType.User;
    
    private String assignmentId;
    
    private TelemetryAccountDetails account;
    
    /**
     * Creates a new instance of the BaseExperimentEvent class.
     *
     * @param buildType    App build type
     * @param privacyTag    Privacy tag as defined by Office Privacy Framework guidelines. Note: not logged in telemetry.
     * @param privacyDataType    Privacy data type defined by telemetry loggers per MOJ Privacy requirements. Note: not logged in telemetry.
     * @param experiment    Name of the experiment, as named in the ECS ramp
     * @param variant    Specifies bucket (control, A, B, etc.) as assigned from ECS ramp
     * @param assignmentId    Identifies the assigned user or device. By default we will use the userId (CID for consumer, PUID for business)
     * @param account    User account information
     */
    public BaseExperimentEvent(
            TelemetryAccountDetails account,
            String assignmentId,
            String variant,
            String experiment,
            PrivacyDataType privacyDataType,
            PrivacyTagType privacyTag,
            BuildType buildType) {
        super(privacyDataType, privacyTag, buildType);
        this.experiment = experiment;
        this.variant = variant;
        this.assignmentId = assignmentId;
        this.account = account;
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
     * Gets the PrivacyTag property.
     */
    @Override
    public PrivacyTagType getPrivacyTag() {
        return this.privacyTag;
    }
    
    /**
     * Sets the PrivacyTag property. "Experiment exposure events are all required service data."
     */
    public void setPrivacyTag(PrivacyTagType value) {
        this.privacyTag = value;
    }
    
    /**
     * Gets the PrivacyDataType property.
     */
    @Override
    public PrivacyDataType getPrivacyDataType() {
        return this.privacyDataType;
    }
    
    /**
     * Sets the PrivacyDataType property. "Experiment exposure events are all service usage."
     */
    public void setPrivacyDataType(PrivacyDataType value) {
        this.privacyDataType = value;
    }
    
    /**
     * Gets the Experiment property.
     */
    public String getExperiment() {
        return this.experiment;
    }
    
    /**
     * Sets the Experiment property. "Name of the experiment, as named in the ECS ramp"
     */
    public void setExperiment(String value) {
        this.experiment = value;
    }
    
    /**
     * Gets the Variant property.
     */
    public String getVariant() {
        return this.variant;
    }
    
    /**
     * Sets the Variant property. "Specifies bucket (control, A, B, etc.) as assigned from ECS ramp"
     */
    public void setVariant(String value) {
        this.variant = value;
    }
    
    /**
     * Gets the AssignmentType property.
     */
    public ExperimentAssignmentType getAssignmentType() {
        return this.assignmentType;
    }
    
    /**
     * Sets the AssignmentType property. "Either 'User' or 'Device', depending on the type of the assignmentId. Unless otherwise specified, this should be 'User'"
     */
    public void setAssignmentType(ExperimentAssignmentType value) {
        this.assignmentType = value;
    }
    
    /**
     * Gets the AssignmentId property.
     */
    public String getAssignmentId() {
        return this.assignmentId;
    }
    
    /**
     * Sets the AssignmentId property. "Identifies the assigned user or device. By default we will use the userId (CID for consumer, PUID for business)"
     */
    public void setAssignmentId(String value) {
        this.assignmentId = value;
    }
    
    /**
     * Gets the Account property.
     */
    public TelemetryAccountDetails getAccount() {
        return this.account;
    }
    
    /**
     * Sets the Account property. "User account information"
     */
    public void setAccount(TelemetryAccountDetails value) {
        this.account = value;
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
        
        if (privacyTag != null) {
            map.put("PrivacyTag", privacyTag.name());
        }
        
        if (privacyDataType != null) {
            map.put("PrivacyDataType", privacyDataType.name());
        }
        
        if (experiment != null) {
            map.put("Experiment", String.valueOf(this.experiment));
        }
        
        if (variant != null) {
            map.put("Variant", String.valueOf(this.variant));
        }
        
        if (assignmentType != null) {
            map.put("AssignmentType", assignmentType.name());
        }
        
        if (assignmentId != null) {
            map.put("AssignmentId", String.valueOf(this.assignmentId));
        }
        
        if (account != null) {
            map.putAll(account.getProperties());
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
        parentBlankProperties.remove(privacyTag);
        if (privacyTag == null) {
            blankProperties.add("privacyTag");
        }
        parentBlankProperties.remove(privacyDataType);
        if (privacyDataType == null) {
            blankProperties.add("privacyDataType");
        }
        if (experiment == null) {
            blankProperties.add("experiment");
        }
        if (variant == null) {
            blankProperties.add("variant");
        }
        if (assignmentId == null) {
            blankProperties.add("assignmentId");
        }
        if (account == null) {
            blankProperties.add("account");
        }
        blankProperties.addAll(parentBlankProperties);
        return blankProperties;
    }


    /**
     * Retrieves the event's proper name
     */
    @Override
    public String eventIdentity() {
        return String.format("%s/%s", String.valueOf(getEventType()), String.valueOf(getExperiment()));
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
