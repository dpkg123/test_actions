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
 * GENERATED Data contract class AuthEvent.
 *
 * "An event that represents authentication activity. This event also serves as a base to other authentication events."
 */
public class AuthEvent extends TelemetryEvent
{
    private TelemetryEventType eventType = TelemetryEventType.Auth;
    
    private PrivacyTagType privacyTag = PrivacyTagType.RequiredServiceData;
    
    private PrivacyDataType privacyDataType = PrivacyDataType.ProductAndServiceUsage;
    
    private TelemetryAccountDetails account;
    
    private CompletionType authenticationResult;
    
    private TelemetryErrorDetails errorDetails;
    
    private AuthenticationBrokerType brokerApp;
    
    private String brokerAppVersion;
    
    /**
     * Creates a new instance of the AuthEvent class.
     *
     * @param buildType    App build type
     * @param privacyTag    Privacy tag as defined by Office Privacy Framework guidelines. Note: not logged in telemetry.
     * @param privacyDataType    Privacy data type defined by telemetry loggers per MOJ Privacy requirements. Note: not logged in telemetry.
     * @param authenticationResult    The result of the authentication event.
     */
    public AuthEvent(
            CompletionType authenticationResult,
            PrivacyDataType privacyDataType,
            PrivacyTagType privacyTag,
            BuildType buildType) {
        super(privacyDataType, privacyTag, buildType);
        this.authenticationResult = authenticationResult;
    }
    
    /**
     * Gets the EventType property.
     */
    @Override
    public TelemetryEventType getEventType() {
        return this.eventType;
    }
    
    /**
     * Gets the PrivacyTag property.
     */
    @Override
    public PrivacyTagType getPrivacyTag() {
        return this.privacyTag;
    }
    
    /**
     * Sets the PrivacyTag property. "Auth events are all required service data."
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
     * Sets the PrivacyDataType property. "Auth events are all service usage."
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
     * Sets the Account property. "The account performing the event, if available"
     */
    public void setAccount(TelemetryAccountDetails value) {
        this.account = value;
    }
    
    /**
     * Gets the AuthenticationResult property.
     */
    public CompletionType getAuthenticationResult() {
        return this.authenticationResult;
    }
    
    /**
     * Sets the AuthenticationResult property. "The result of the authentication event."
     */
    public void setAuthenticationResult(CompletionType value) {
        this.authenticationResult = value;
    }
    
    /**
     * Gets the ErrorDetails property.
     */
    public TelemetryErrorDetails getErrorDetails() {
        return this.errorDetails;
    }
    
    /**
     * Sets the ErrorDetails property. "If an error occurred these details should be instrumented."
     */
    public void setErrorDetails(TelemetryErrorDetails value) {
        this.errorDetails = value;
    }
    
    /**
     * Gets the BrokerApp property.
     */
    public AuthenticationBrokerType getBrokerApp() {
        return this.brokerApp;
    }
    
    /**
     * Sets the BrokerApp property. "The authentication broker is being used with the auth event."
     */
    public void setBrokerApp(AuthenticationBrokerType value) {
        this.brokerApp = value;
    }
    
    /**
     * Gets the BrokerAppVersion property.
     */
    public String getBrokerAppVersion() {
        return this.brokerAppVersion;
    }
    
    /**
     * Sets the BrokerAppVersion property. "The version of the authentication broker used with the auth event."
     */
    public void setBrokerAppVersion(String value) {
        this.brokerAppVersion = value;
    }
    

    /**
     * Retrieves the properties as a Map
     */
    public Map<String, String> getProperties() {
        Map<String, String> map = super.getProperties();

        if (eventType != null) {
            map.put("EventType", eventType.name());
        }
        
        if (privacyTag != null) {
            map.put("PrivacyTag", privacyTag.name());
        }
        
        if (privacyDataType != null) {
            map.put("PrivacyDataType", privacyDataType.name());
        }
        
        if (account != null) {
            map.putAll(account.getProperties());
        }
        
        if (authenticationResult != null) {
            map.put("CompletionStatus", authenticationResult.name());
        }
        
        if (errorDetails != null) {
            map.putAll(errorDetails.getProperties());
        }
        
        if (brokerApp != null) {
            map.put("BrokerApp", brokerApp.name());
        }
        
        if (brokerAppVersion != null) {
            map.put("BrokerAppVersion", String.valueOf(this.brokerAppVersion));
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
        parentBlankProperties.remove(privacyTag);
        if (privacyTag == null) {
            blankProperties.add("privacyTag");
        }
        parentBlankProperties.remove(privacyDataType);
        if (privacyDataType == null) {
            blankProperties.add("privacyDataType");
        }
        if (authenticationResult == null) {
            blankProperties.add("authenticationResult");
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
        return "usagemobile";
    }
}
