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
 * GENERATED Data contract class CustomerPromiseEvent.
 *
 * "An event representing a client Customer Promise"
 */
public class CustomerPromiseEvent extends TelemetryEvent
{
    private TelemetryEventType eventType = TelemetryEventType.CustomerPromise;
    
    private String name = "CustomerPromise";
    
    private PrivacyTagType privacyTag = PrivacyTagType.RequiredServiceData;
    
    private PrivacyDataType privacyDataType = PrivacyDataType.ProductAndServicePerformance;
    
    private TelemetryAccountDetails account;
    
    private String scenario;
    
    private OperationResultType resultType;
    
    private String errorCode;
    
    private String clientName;
    
    private String customerRing;
    
    private String architecture = "";
    
    private Double duration;
    
    private String sessionId;
    
    private String veto;
    
    private AshaPillarType ashaPillarType;
    
    private AshaScenarioType ashaScenarioType;
    
    private AshaProductType product;
    
    private String farmName = "";
    
    private String serverGU = "";
    
    /**
     * Creates a new instance of the CustomerPromiseEvent class.
     *
     * @param buildType    App build type
     * @param privacyTag    Privacy tag as defined by Office Privacy Framework guidelines. Note: not logged in telemetry.
     * @param privacyDataType    Privacy data type defined by telemetry loggers per MOJ Privacy requirements. Note: not logged in telemetry.
     * @param account    The account performing the event, it must be specified unless the operation being measured occurs before an account is authenticated
     * @param scenario    String identifying the Customer Promise
     * @param resultType    The result of the operation
     * @param errorCode    A human-readable code related to the result of the operation
     * @param clientName    Client name to be identified at org level
     * @param customerRing    Client side ring used for gradual deployment of bits, ramps, and flights
     */
    public CustomerPromiseEvent(
            String customerRing,
            String clientName,
            String errorCode,
            OperationResultType resultType,
            String scenario,
            TelemetryAccountDetails account,
            PrivacyDataType privacyDataType,
            PrivacyTagType privacyTag,
            BuildType buildType) {
        super(privacyDataType, privacyTag, buildType);
        this.account = account;
        this.scenario = scenario;
        this.resultType = resultType;
        this.errorCode = errorCode;
        this.clientName = clientName;
        this.customerRing = customerRing;
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
     * Sets the PrivacyTag property. "CP events are all required service data."
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
     * Sets the PrivacyDataType property. "CP events are all service performance."
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
     * Sets the Account property. "The account performing the event, it must be specified unless the operation being measured occurs before an account is authenticated"
     */
    public void setAccount(TelemetryAccountDetails value) {
        this.account = value;
    }
    
    /**
     * Gets the Scenario property.
     */
    @Override
    public String getScenario() {
        return this.scenario;
    }
    
    /**
     * Sets the Scenario property. "String identifying the Customer Promise"
     */
    public void setScenario(String value) {
        this.scenario = value;
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
     * Gets the ErrorCode property.
     */
    public String getErrorCode() {
        return this.errorCode;
    }
    
    /**
     * Sets the ErrorCode property. "A human-readable code related to the result of the operation"
     */
    public void setErrorCode(String value) {
        this.errorCode = value;
    }
    
    /**
     * Gets the ClientName property.
     */
    public String getClientName() {
        return this.clientName;
    }
    
    /**
     * Sets the ClientName property. "Client name to be identified at org level"
     */
    public void setClientName(String value) {
        this.clientName = value;
    }
    
    /**
     * Gets the CustomerRing property.
     */
    public String getCustomerRing() {
        return this.customerRing;
    }
    
    /**
     * Sets the CustomerRing property. "Client side ring used for gradual deployment of bits, ramps, and flights"
     */
    public void setCustomerRing(String value) {
        this.customerRing = value;
    }
    
    /**
     * Gets the Architecture property.
     */
    public String getArchitecture() {
        return this.architecture;
    }
    
    /**
     * Sets the Architecture property. "CPU architecture of the client device"
     */
    public void setArchitecture(String value) {
        this.architecture = value;
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
     * Gets the SessionId property.
     */
    public String getSessionId() {
        return this.sessionId;
    }
    
    /**
     * Sets the SessionId property. "The session id"
     */
    public void setSessionId(String value) {
        this.sessionId = value;
    }
    
    /**
     * Gets the Veto property.
     */
    public String getVeto() {
        return this.veto;
    }
    
    /**
     * Sets the Veto property. "The veto type of the session"
     */
    public void setVeto(String value) {
        this.veto = value;
    }
    
    /**
     * Gets the AshaPillarType property.
     */
    public AshaPillarType getAshaPillarType() {
        return this.ashaPillarType;
    }
    
    /**
     * Sets the AshaPillarType property. "The pillar of the ASHA event"
     */
    public void setAshaPillarType(AshaPillarType value) {
        this.ashaPillarType = value;
    }
    
    /**
     * Gets the AshaScenarioType property.
     */
    public AshaScenarioType getAshaScenarioType() {
        return this.ashaScenarioType;
    }
    
    /**
     * Sets the AshaScenarioType property. "The scenario of the ASHA event"
     */
    public void setAshaScenarioType(AshaScenarioType value) {
        this.ashaScenarioType = value;
    }
    
    /**
     * Gets the Product property.
     */
    public AshaProductType getProduct() {
        return this.product;
    }
    
    /**
     * Sets the Product property. "The product relating to the ASHA event"
     */
    public void setProduct(AshaProductType value) {
        this.product = value;
    }
    
    /**
     * Gets the FarmName property.
     */
    public String getFarmName() {
        return this.farmName;
    }
    
    /**
     * Gets the ServerGU property.
     */
    public String getServerGU() {
        return this.serverGU;
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
        
        if (account != null) {
            map.putAll(account.getProperties());
        }
        
        if (scenario != null) {
            map.put("Scenario", String.valueOf(this.scenario));
        }
        
        if (resultType != null) {
            map.put("ResultType", resultType.name());
        }
        
        if (errorCode != null) {
            map.put("ErrorCode", String.valueOf(this.errorCode));
        }
        
        if (clientName != null) {
            map.put("ClientName", String.valueOf(this.clientName));
        }
        
        if (customerRing != null) {
            map.put("CustomerRing", String.valueOf(this.customerRing));
        }
        
        if (architecture != null) {
            map.put("Architecture", String.valueOf(this.architecture));
        }
        
        if (duration != null) {
            map.put("Duration", String.valueOf(this.duration));
        }
        
        if (sessionId != null) {
            map.put("SessionId", String.valueOf(this.sessionId));
        }
        
        if (veto != null) {
            map.put("Veto", String.valueOf(this.veto));
        }
        
        if (ashaPillarType != null) {
            map.put("AshaPillarType", ashaPillarType.name());
        }
        
        if (ashaScenarioType != null) {
            map.put("AshaScenarioType", ashaScenarioType.name());
        }
        
        if (product != null) {
            map.put("Product", product.name());
        }
        
        if (farmName != null) {
            map.put("FarmName", String.valueOf(this.farmName));
        }
        
        if (serverGU != null) {
            map.put("ServerGU", String.valueOf(this.serverGU));
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
        if (account == null) {
            blankProperties.add("account");
        }
        parentBlankProperties.remove(scenario);
        if (scenario == null) {
            blankProperties.add("scenario");
        }
        if (resultType == null) {
            blankProperties.add("resultType");
        }
        if (errorCode == null) {
            blankProperties.add("errorCode");
        }
        if (clientName == null) {
            blankProperties.add("clientName");
        }
        if (customerRing == null) {
            blankProperties.add("customerRing");
        }
        if (farmName == null) {
            blankProperties.add("farmName");
        }
        if (serverGU == null) {
            blankProperties.add("serverGU");
        }
        blankProperties.addAll(parentBlankProperties);
        return blankProperties;
    }


    /**
     * Retrieves the event's proper name
     */
    @Override
    public String eventIdentity() {
        return String.format("%s/%s", String.valueOf(getEventType()), String.valueOf(getScenario()));
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
        return "ScenarioQoS";
    }
}
