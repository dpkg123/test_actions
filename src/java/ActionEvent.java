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
 * GENERATED Data contract class ActionEvent.
 *
 * "An event that represents a user invoked action on OneDrive items"
 */
public class ActionEvent extends TelemetryEvent
{
    private TelemetryEventType eventType = TelemetryEventType.Action;
    
    private TelemetryAccountDetails account;
    
    private Integer isIntentional = 1;
    
    private CompletionType completionStatus;
    
    private TabViewType tab;
    
    private String view;
    
    private ActionEntryPointType actionEntryPoint;
    
    private TelemetryItemSetDetails items;
    
    private TelemetryErrorDetails error;
    
    private PrivacyTagType privacyTag = PrivacyTagType.RequiredServiceData;
    
    private PrivacyDataType privacyDataType = PrivacyDataType.ProductAndServiceUsage;
    
    /**
     * Creates a new instance of the ActionEvent class.
     *
     * @param buildType    App build type
     * @param privacyTag    Privacy tag as defined by Office Privacy Framework guidelines. Note: not logged in telemetry.
     * @param privacyDataType    Privacy data type defined by telemetry loggers per MOJ Privacy requirements. Note: not logged in telemetry.
     * @param account    The account performing the event
     * @param completionStatus    Did the action complete
     * @param tab    Which pivot was this action called from
     * @param actionEntryPoint    Entry point for Action
     * @param items    Summary of items being acted upon
     */
    public ActionEvent(
            TelemetryItemSetDetails items,
            ActionEntryPointType actionEntryPoint,
            TabViewType tab,
            CompletionType completionStatus,
            TelemetryAccountDetails account,
            PrivacyDataType privacyDataType,
            PrivacyTagType privacyTag,
            BuildType buildType) {
        super(privacyDataType, privacyTag, buildType);
        this.account = account;
        this.completionStatus = completionStatus;
        this.tab = tab;
        this.actionEntryPoint = actionEntryPoint;
        this.items = items;
    }
    
    /**
     * Gets the EventType property.
     */
    @Override
    public TelemetryEventType getEventType() {
        return this.eventType;
    }
    
    /**
     * Gets the Account property.
     */
    public TelemetryAccountDetails getAccount() {
        return this.account;
    }
    
    /**
     * Sets the Account property. "The account performing the event"
     */
    public void setAccount(TelemetryAccountDetails value) {
        this.account = value;
    }
    
    /**
     * Gets the IsIntentional property.
     */
    @Override
    public Integer getIsIntentional() {
        return this.isIntentional;
    }
    
    /**
     * Sets the IsIntentional property. "Actions should always be intentional"
     */
    public void setIsIntentional(Integer value) {
        this.isIntentional = value;
    }
    
    /**
     * Gets the CompletionStatus property.
     */
    public CompletionType getCompletionStatus() {
        return this.completionStatus;
    }
    
    /**
     * Sets the CompletionStatus property. "Did the action complete"
     */
    public void setCompletionStatus(CompletionType value) {
        this.completionStatus = value;
    }
    
    /**
     * Gets the Tab property.
     */
    public TabViewType getTab() {
        return this.tab;
    }
    
    /**
     * Sets the Tab property. "Which pivot was this action called from"
     */
    public void setTab(TabViewType value) {
        this.tab = value;
    }
    
    /**
     * Gets the View property.
     */
    public String getView() {
        return this.view;
    }
    
    /**
     * Sets the View property. "Which view/class was this action called from"
     */
    public void setView(String value) {
        this.view = value;
    }
    
    /**
     * Gets the ActionEntryPoint property.
     */
    public ActionEntryPointType getActionEntryPoint() {
        return this.actionEntryPoint;
    }
    
    /**
     * Sets the ActionEntryPoint property. "Entry point for Action"
     */
    public void setActionEntryPoint(ActionEntryPointType value) {
        this.actionEntryPoint = value;
    }
    
    /**
     * Gets the Items property.
     */
    public TelemetryItemSetDetails getItems() {
        return this.items;
    }
    
    /**
     * Sets the Items property. "Summary of items being acted upon"
     */
    public void setItems(TelemetryItemSetDetails value) {
        this.items = value;
    }
    
    /**
     * Gets the Error property.
     */
    public TelemetryErrorDetails getError() {
        return this.error;
    }
    
    /**
     * Sets the Error property. "Service or network error details"
     */
    public void setError(TelemetryErrorDetails value) {
        this.error = value;
    }
    
    /**
     * Gets the PrivacyTag property.
     */
    @Override
    public PrivacyTagType getPrivacyTag() {
        return this.privacyTag;
    }
    
    /**
     * Sets the PrivacyTag property. "Action events, by definition of an action event, are all required service data."
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
     * Sets the PrivacyDataType property. "Action events, by definition of an action event, are all service usage."
     */
    public void setPrivacyDataType(PrivacyDataType value) {
        this.privacyDataType = value;
    }
    

    /**
     * Retrieves the properties as a Map
     */
    public Map<String, String> getProperties() {
        Map<String, String> map = super.getProperties();

        if (eventType != null) {
            map.put("EventType", eventType.name());
        }
        
        if (account != null) {
            map.putAll(account.getProperties());
        }
        
        if (isIntentional != null) {
            map.put("IsIntentional", String.valueOf(this.isIntentional));
        }
        
        if (completionStatus != null) {
            map.put("CompletionStatus", completionStatus.name());
        }
        
        if (tab != null) {
            map.put("Tab", tab.name());
        }
        
        if (view != null) {
            map.put("View", String.valueOf(this.view));
        }
        
        if (actionEntryPoint != null) {
            map.put("ActionEntryPoint", actionEntryPoint.name());
        }
        
        if (items != null) {
            map.putAll(items.getProperties());
        }
        
        if (error != null) {
            map.putAll(error.getProperties());
        }
        
        if (privacyTag != null) {
            map.put("PrivacyTag", privacyTag.name());
        }
        
        if (privacyDataType != null) {
            map.put("PrivacyDataType", privacyDataType.name());
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
        if (account == null) {
            blankProperties.add("account");
        }
        if (completionStatus == null) {
            blankProperties.add("completionStatus");
        }
        if (tab == null) {
            blankProperties.add("tab");
        }
        if (actionEntryPoint == null) {
            blankProperties.add("actionEntryPoint");
        }
        if (items == null) {
            blankProperties.add("items");
        }
        parentBlankProperties.remove(privacyTag);
        if (privacyTag == null) {
            blankProperties.add("privacyTag");
        }
        parentBlankProperties.remove(privacyDataType);
        if (privacyDataType == null) {
            blankProperties.add("privacyDataType");
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
