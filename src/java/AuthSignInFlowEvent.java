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
 * GENERATED Data contract class AuthSignInFlowEvent.
 *
 * "An event representing a step and a result of a step in the sign-in flow."
 */
public class AuthSignInFlowEvent extends AuthEvent
{
    private String name = "SignInFlow";
    
    private AuthenticationFlowType authFlow;
    
    private CompletionType result;
    
    private String emailDomain;
    
    /**
     * Creates a new instance of the AuthSignInFlowEvent class.
     *
     * @param buildType    App build type
     * @param privacyTag    Privacy tag as defined by Office Privacy Framework guidelines. Note: not logged in telemetry.
     * @param privacyDataType    Privacy data type defined by telemetry loggers per MOJ Privacy requirements. Note: not logged in telemetry.
     * @param authenticationResult    The result of the authentication event.
     * @param authFlow    The flow for this sign-in experience.
     * @param result    The sign-in experience result.
     */
    public AuthSignInFlowEvent(
            CompletionType result,
            AuthenticationFlowType authFlow,
            CompletionType authenticationResult,
            PrivacyDataType privacyDataType,
            PrivacyTagType privacyTag,
            BuildType buildType) {
        super(authenticationResult, privacyDataType, privacyTag, buildType);
        this.authFlow = authFlow;
        this.result = result;
    }
    
    /**
     * Gets the Name property.
     */
    @Override
    public String getName() {
        return this.name;
    }
    
    /**
     * Gets the AuthFlow property.
     */
    public AuthenticationFlowType getAuthFlow() {
        return this.authFlow;
    }
    
    /**
     * Sets the AuthFlow property. "The flow for this sign-in experience."
     */
    public void setAuthFlow(AuthenticationFlowType value) {
        this.authFlow = value;
    }
    
    /**
     * Gets the Result property.
     */
    public CompletionType getResult() {
        return this.result;
    }
    
    /**
     * Sets the Result property. "The sign-in experience result."
     */
    public void setResult(CompletionType value) {
        this.result = value;
    }
    
    /**
     * Gets the EmailDomain property.
     */
    public String getEmailDomain() {
        return this.emailDomain;
    }
    
    /**
     * Sets the EmailDomain property. "The email domain portion of the user account email, captured for events where tenant is not yet available."
     */
    public void setEmailDomain(String value) {
        this.emailDomain = value;
    }
    

    /**
     * Retrieves the properties as a Map
     */
    public Map<String, String> getProperties() {
        Map<String, String> map = super.getProperties();

        if (name != null) {
            map.put("Name", String.valueOf(this.name));
        }
        
        if (authFlow != null) {
            map.put("Flow", authFlow.name());
        }
        
        if (result != null) {
            map.put("Result", result.name());
        }
        
        if (emailDomain != null) {
            map.put("EmailDomain", String.valueOf(this.emailDomain));
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
        if (authFlow == null) {
            blankProperties.add("authFlow");
        }
        if (result == null) {
            blankProperties.add("result");
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
