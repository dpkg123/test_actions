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
 * GENERATED Data contract class AuthTokenRefreshEvent.
 *
 * "An event that represents activities related to authentication tokens."
 */
public class AuthTokenRefreshEvent extends AuthEvent
{
    private String name = "TokenRefresh";
    
    private Boolean isRetry;
    
    private Boolean isPasswordChanged;
    
    private String correlationId;
    
    /**
     * Creates a new instance of the AuthTokenRefreshEvent class.
     *
     * @param buildType    App build type
     * @param privacyTag    Privacy tag as defined by Office Privacy Framework guidelines. Note: not logged in telemetry.
     * @param privacyDataType    Privacy data type defined by telemetry loggers per MOJ Privacy requirements. Note: not logged in telemetry.
     * @param authenticationResult    The result of the authentication event.
     * @param isRetry    Is this auth token refresh event due to a retry?
     * @param isPasswordChanged    Is this auth token refresh event due to a user-initiated password change?
     */
    public AuthTokenRefreshEvent(
            Boolean isPasswordChanged,
            Boolean isRetry,
            CompletionType authenticationResult,
            PrivacyDataType privacyDataType,
            PrivacyTagType privacyTag,
            BuildType buildType) {
        super(authenticationResult, privacyDataType, privacyTag, buildType);
        this.isRetry = isRetry;
        this.isPasswordChanged = isPasswordChanged;
    }
    
    /**
     * Gets the Name property.
     */
    @Override
    public String getName() {
        return this.name;
    }
    
    /**
     * Gets the IsRetry property.
     */
    public Boolean getIsRetry() {
        return this.isRetry;
    }
    
    /**
     * Sets the IsRetry property. "Is this auth token refresh event due to a retry?"
     */
    public void setIsRetry(Boolean value) {
        this.isRetry = value;
    }
    
    /**
     * Gets the IsPasswordChanged property.
     */
    public Boolean getIsPasswordChanged() {
        return this.isPasswordChanged;
    }
    
    /**
     * Sets the IsPasswordChanged property. "Is this auth token refresh event due to a user-initiated password change?"
     */
    public void setIsPasswordChanged(Boolean value) {
        this.isPasswordChanged = value;
    }
    
    /**
     * Gets the CorrelationId property.
     */
    public String getCorrelationId() {
        return this.correlationId;
    }
    
    /**
     * Sets the CorrelationId property. "The correlation id is a shared identifier between the service and the client."
     */
    public void setCorrelationId(String value) {
        this.correlationId = value;
    }
    

    /**
     * Retrieves the properties as a Map
     */
    public Map<String, String> getProperties() {
        Map<String, String> map = super.getProperties();

        if (name != null) {
            map.put("Name", String.valueOf(this.name));
        }
        
        if (isRetry != null) {
            map.put("IsRetry", String.valueOf(this.isRetry));
        }
        
        if (isPasswordChanged != null) {
            map.put("IsPasswordChanged", String.valueOf(this.isPasswordChanged));
        }
        
        if (correlationId != null) {
            map.put("CorrelationId", String.valueOf(this.correlationId));
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
        if (isRetry == null) {
            blankProperties.add("isRetry");
        }
        if (isPasswordChanged == null) {
            blankProperties.add("isPasswordChanged");
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
