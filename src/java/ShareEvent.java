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
 * GENERATED Data contract class ShareEvent.
 *
 * "User action Share event"
 */
public class ShareEvent extends ActionEvent
{
    private String name = "Share";
    
    private ShareOperationType shareOperation;
    
    private SharingPermissionLevelType permissionLevel;
    
    private Boolean withExpiration;
    
    private Integer numberOfPeopleInvited;
    
    /**
     * Creates a new instance of the ShareEvent class.
     *
     * @param buildType    App build type
     * @param privacyTag    Privacy tag as defined by Office Privacy Framework guidelines. Note: not logged in telemetry.
     * @param privacyDataType    Privacy data type defined by telemetry loggers per MOJ Privacy requirements. Note: not logged in telemetry.
     * @param account    The account performing the event
     * @param completionStatus    Did the action complete
     * @param tab    Which pivot was this action called from
     * @param actionEntryPoint    Entry point for Action
     * @param items    Summary of items being acted upon
     * @param shareOperation    The method of sharing
     * @param permissionLevel    Permission level during sharing
     * @param withExpiration    If this was shared with expiration set or not
     */
    public ShareEvent(
            Boolean withExpiration,
            SharingPermissionLevelType permissionLevel,
            ShareOperationType shareOperation,
            TelemetryItemSetDetails items,
            ActionEntryPointType actionEntryPoint,
            TabViewType tab,
            CompletionType completionStatus,
            TelemetryAccountDetails account,
            PrivacyDataType privacyDataType,
            PrivacyTagType privacyTag,
            BuildType buildType) {
        super(items, actionEntryPoint, tab, completionStatus, account, privacyDataType, privacyTag, buildType);
        this.shareOperation = shareOperation;
        this.permissionLevel = permissionLevel;
        this.withExpiration = withExpiration;
    }
    
    /**
     * Gets the Name property.
     */
    @Override
    public String getName() {
        return this.name;
    }
    
    /**
     * Gets the ShareOperation property.
     */
    public ShareOperationType getShareOperation() {
        return this.shareOperation;
    }
    
    /**
     * Sets the ShareOperation property. "The method of sharing"
     */
    public void setShareOperation(ShareOperationType value) {
        this.shareOperation = value;
    }
    
    /**
     * Gets the PermissionLevel property.
     */
    public SharingPermissionLevelType getPermissionLevel() {
        return this.permissionLevel;
    }
    
    /**
     * Sets the PermissionLevel property. "Permission level during sharing"
     */
    public void setPermissionLevel(SharingPermissionLevelType value) {
        this.permissionLevel = value;
    }
    
    /**
     * Gets the WithExpiration property.
     */
    public Boolean getWithExpiration() {
        return this.withExpiration;
    }
    
    /**
     * Sets the WithExpiration property. "If this was shared with expiration set or not"
     */
    public void setWithExpiration(Boolean value) {
        this.withExpiration = value;
    }
    
    /**
     * Gets the NumberOfPeopleInvited property.
     */
    public Integer getNumberOfPeopleInvited() {
        return this.numberOfPeopleInvited;
    }
    
    /**
     * Sets the NumberOfPeopleInvited property. "Number of people receiving invitation"
     */
    public void setNumberOfPeopleInvited(Integer value) {
        this.numberOfPeopleInvited = value;
    }
    

    /**
     * Retrieves the properties as a Map
     */
    public Map<String, String> getProperties() {
        Map<String, String> map = super.getProperties();

        if (name != null) {
            map.put("Name", String.valueOf(this.name));
        }
        
        if (shareOperation != null) {
            map.put("ShareOperation", shareOperation.name());
        }
        
        if (permissionLevel != null) {
            map.put("PermissionLevel", permissionLevel.name());
        }
        
        if (withExpiration != null) {
            map.put("WithExpiration", String.valueOf(this.withExpiration));
        }
        
        if (numberOfPeopleInvited != null) {
            map.put("NumberOfPeopleInvited", String.valueOf(this.numberOfPeopleInvited));
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
        if (shareOperation == null) {
            blankProperties.add("shareOperation");
        }
        if (permissionLevel == null) {
            blankProperties.add("permissionLevel");
        }
        if (withExpiration == null) {
            blankProperties.add("withExpiration");
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
