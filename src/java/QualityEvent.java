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
 * GENERATED Data contract class QualityEvent.
 *
 * "An event representing a reliability, latency, or quality element in the app"
 */
public class QualityEvent extends TelemetryEvent
{
    private TelemetryEventType eventType = TelemetryEventType.QoS;
    
    private String name = "QoS";
    
    private PrivacyTagType privacyTag = PrivacyTagType.RequiredServiceData;
    
    private PrivacyDataType privacyDataType = PrivacyDataType.ProductAndServicePerformance;
    
    private String eventCategory;
    
    private TelemetryAccountDetails account;
    
    private EnvironmentType environment;
    
    private String resultCode;
    
    private OperationResultType resultType;
    
    private Double duration;
    
    private String errorMessage;
    
    private TelemetryErrorDetails errorDetails;
    
    private String correlationVector;
    
    private String bucket;
    
    private String secondaryBucket;
    
    /**
     * Creates a new instance of the QualityEvent class.
     *
     * @param buildType    App build type
     * @param privacyTag    Privacy tag as defined by Office Privacy Framework guidelines. Note: not logged in telemetry.
     * @param privacyDataType    Privacy data type defined by telemetry loggers per MOJ Privacy requirements. Note: not logged in telemetry.
     * @param eventCategory    The event category, similar to event type or event name
     * @param environment    The environment type, specified if known
     * @param resultCode    A code related to the result of the operation
     * @param resultType    The result of the operation
     */
    public QualityEvent(
            OperationResultType resultType,
            String resultCode,
            EnvironmentType environment,
            String eventCategory,
            PrivacyDataType privacyDataType,
            PrivacyTagType privacyTag,
            BuildType buildType) {
        super(privacyDataType, privacyTag, buildType);
        this.eventCategory = eventCategory;
        this.environment = environment;
        this.resultCode = resultCode;
        this.resultType = resultType;
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
     * Sets the PrivacyTag property. "QoS events are all required service data."
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
     * Sets the PrivacyDataType property. "QoS events are all service performance."
     */
    public void setPrivacyDataType(PrivacyDataType value) {
        this.privacyDataType = value;
    }
    
    /**
     * Gets the EventCategory property.
     */
    public String getEventCategory() {
        return this.eventCategory;
    }
    
    /**
     * Sets the EventCategory property. "The event category, similar to event type or event name"
     */
    public void setEventCategory(String value) {
        this.eventCategory = value;
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
     * Gets the ResultCode property.
     */
    public String getResultCode() {
        return this.resultCode;
    }
    
    /**
     * Sets the ResultCode property. "A code related to the result of the operation"
     */
    public void setResultCode(String value) {
        this.resultCode = value;
    }
    
    /**
     * Gets the ResultType property.
     */
    public OperationResultType getResultType() {
        return this.resultType;
    }
    
    /**
     * Sets the ResultType property. "The result of the operation"
     */
    public void setResultType(OperationResultType value) {
        this.resultType = value;
    }
    
    /**
     * Gets the Duration property.
     */
    public Double getDuration() {
        return this.duration;
    }
    
    /**
     * Sets the Duration property. "Amount of time the operation took to complete in milliseconds"
     */
    public void setDuration(Double value) {
        this.duration = value;
    }
    
    /**
     * Gets the ErrorMessage property.
     */
    public String getErrorMessage() {
        return this.errorMessage;
    }
    
    /**
     * Sets the ErrorMessage property. "A more detailed error message"
     */
    public void setErrorMessage(String value) {
        this.errorMessage = value;
    }
    
    /**
     * Gets the ErrorDetails property.
     */
    public TelemetryErrorDetails getErrorDetails() {
        return this.errorDetails;
    }
    
    /**
     * Sets the ErrorDetails property. "Any mobile error details related to the operation"
     */
    public void setErrorDetails(TelemetryErrorDetails value) {
        this.errorDetails = value;
    }
    
    /**
     * Gets the CorrelationVector property.
     */
    public String getCorrelationVector() {
        return this.correlationVector;
    }
    
    /**
     * Sets the CorrelationVector property. "A magical value that associates this request to other backend server requests"
     */
    public void setCorrelationVector(String value) {
        this.correlationVector = value;
    }
    
    /**
     * Gets the Bucket property.
     */
    public String getBucket() {
        return this.bucket;
    }
    
    /**
     * Sets the Bucket property. "A further breakdown of the event, a miscellaneous dimension"
     */
    public void setBucket(String value) {
        this.bucket = value;
    }
    
    /**
     * Gets the SecondaryBucket property.
     */
    public String getSecondaryBucket() {
        return this.secondaryBucket;
    }
    
    /**
     * Sets the SecondaryBucket property. "A secondary further breakdown of the event, a miscellaneous dimension. To be used only if bucket property is already being used."
     */
    public void setSecondaryBucket(String value) {
        this.secondaryBucket = value;
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
        
        if (eventCategory != null) {
            map.put("EventCategory", String.valueOf(this.eventCategory));
        }
        
        if (account != null) {
            map.putAll(account.getProperties());
        }
        
        if (environment != null) {
            map.put("Environment", environment.name());
        }
        
        if (resultCode != null) {
            map.put("ResultCode", String.valueOf(this.resultCode));
        }
        
        if (resultType != null) {
            map.put("ResultType", resultType.name());
        }
        
        if (duration != null) {
            map.put("Duration", String.valueOf(this.duration));
        }
        
        if (errorMessage != null) {
            map.put("Error", String.valueOf(this.errorMessage));
        }
        
        if (errorDetails != null) {
            map.putAll(errorDetails.getProperties());
        }
        
        if (correlationVector != null) {
            map.put("CorrelationVector", String.valueOf(this.correlationVector));
        }
        
        if (bucket != null) {
            map.put("Bucket", String.valueOf(this.bucket));
        }
        
        if (secondaryBucket != null) {
            map.put("SecondaryBucket", String.valueOf(this.secondaryBucket));
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
        if (eventCategory == null) {
            blankProperties.add("eventCategory");
        }
        if (environment == null) {
            blankProperties.add("environment");
        }
        if (resultCode == null) {
            blankProperties.add("resultCode");
        }
        if (resultType == null) {
            blankProperties.add("resultType");
        }
        blankProperties.addAll(parentBlankProperties);
        return blankProperties;
    }


    /**
     * Retrieves the event's proper name
     */
    @Override
    public String eventIdentity() {
        return String.format("%s/%s", String.valueOf(getEventType()), String.valueOf(getEventCategory()));
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
