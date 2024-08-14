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
 * GENERATED Data contract class AuthSignInStepEvent.
 *
 * "An event representing a sign-in step."
 */
public class AuthSignInStepEvent extends AuthEvent
{
    private String name = "SignInStep";
    
    private AuthenticationFlowType authFlow;
    
    private AuthenticationStepType authStep;
    
    private String correlationId;
    
    /**
     * Creates a new instance of the AuthSignInStepEvent class.
     *
     * @param buildType    App build type
     * @param privacyTag    Privacy tag as defined by Office Privacy Framework guidelines. Note: not logged in telemetry.
     * @param privacyDataType    Privacy data type defined by telemetry loggers per MOJ Privacy requirements. Note: not logged in telemetry.
     * @param authenticationResult    The result of the authentication event.
     * @param authFlow    The flow for this sign-in experience.
     * @param authStep    The step for this event.
     * @param correlationId    An identifier used to correlate server and client signals.
     */
    public AuthSignInStepEvent(
            String correlationId,
            AuthenticationStepType authStep,
            AuthenticationFlowType authFlow,
            CompletionType authenticationResult,
            PrivacyDataType privacyDataType,
            PrivacyTagType privacyTag,
            BuildType buildType) {
        super(authenticationResult, privacyDataType, privacyTag, buildType);
        this.authFlow = authFlow;
        this.authStep = authStep;
        this.correlationId = correlationId;
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
     * Gets the AuthStep property.
     */
    public AuthenticationStepType getAuthStep() {
        return this.authStep;
    }
    
    /**
     * Sets the AuthStep property. "The step for this event."
     */
    public void setAuthStep(AuthenticationStepType value) {
        this.authStep = value;
    }
    
    /**
     * Gets the CorrelationId property.
     */
    public String getCorrelationId() {
        return this.correlationId;
    }
    
    /**
     * Sets the CorrelationId property. "An identifier used to correlate server and client signals."
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
        
        if (authFlow != null) {
            map.put("Flow", authFlow.name());
        }
        
        if (authStep != null) {
            map.put("Step", authStep.name());
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
        if (authFlow == null) {
            blankProperties.add("authFlow");
        }
        if (authStep == null) {
            blankProperties.add("authStep");
        }
        if (correlationId == null) {
            blankProperties.add("correlationId");
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
