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
 * GENERATED Data contract class UploadResultBaseEvent.
 *
 * "An upload result base event."
 */
public class UploadResultBaseEvent extends TelemetryEvent
{
    private TelemetryEventType eventType = TelemetryEventType.Upload;
    
    private PrivacyTagType privacyTag = PrivacyTagType.RequiredServiceData;
    
    private PrivacyDataType privacyDataType = PrivacyDataType.ProductAndServiceUsage;
    
    private TelemetryAccountDetails account;
    
    private CompletionType completionStatus;
    
    private ChunkStageType chunkStage;
    
    private ItemUploadStateType itemUploadState;
    
    private ItemType itemType;
    
    private Boolean uploadInBackground;
    
    private String localIdentifier;
    
    private String extension;
    
    private Integer timeToUpload;
    
    private TelemetryErrorDetails telemetryErrorDetails;
    
    /**
     * Creates a new instance of the UploadResultBaseEvent class.
     *
     * @param buildType    App build type
     * @param privacyTag    Privacy tag as defined by Office Privacy Framework guidelines. Note: not logged in telemetry.
     * @param privacyDataType    Privacy data type defined by telemetry loggers per MOJ Privacy requirements. Note: not logged in telemetry.
     * @param account    The account performing the event
     * @param completionStatus    Upload completion status
     * @param chunkStage    Upload chunk stage
     * @param itemUploadState    Upload state of item
     * @param itemType    Upload Item type
     * @param uploadInBackground    Is the upload progressing in background?
     * @param localIdentifier    A unique identifier representing the item locally
     * @param extension    Extension of upload item
     * @param timeToUpload    Time it took to upload the item in seconds
     */
    public UploadResultBaseEvent(
            Integer timeToUpload,
            String extension,
            String localIdentifier,
            Boolean uploadInBackground,
            ItemType itemType,
            ItemUploadStateType itemUploadState,
            ChunkStageType chunkStage,
            CompletionType completionStatus,
            TelemetryAccountDetails account,
            PrivacyDataType privacyDataType,
            PrivacyTagType privacyTag,
            BuildType buildType) {
        super(privacyDataType, privacyTag, buildType);
        this.account = account;
        this.completionStatus = completionStatus;
        this.chunkStage = chunkStage;
        this.itemUploadState = itemUploadState;
        this.itemType = itemType;
        this.uploadInBackground = uploadInBackground;
        this.localIdentifier = localIdentifier;
        this.extension = extension;
        this.timeToUpload = timeToUpload;
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
     * Sets the PrivacyTag property. "Upload events are all required service data."
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
     * Sets the PrivacyDataType property. "Upload events are all service usage."
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
     * Sets the Account property. "The account performing the event"
     */
    public void setAccount(TelemetryAccountDetails value) {
        this.account = value;
    }
    
    /**
     * Gets the CompletionStatus property.
     */
    public CompletionType getCompletionStatus() {
        return this.completionStatus;
    }
    
    /**
     * Sets the CompletionStatus property. "Upload completion status"
     */
    public void setCompletionStatus(CompletionType value) {
        this.completionStatus = value;
    }
    
    /**
     * Gets the ChunkStage property.
     */
    public ChunkStageType getChunkStage() {
        return this.chunkStage;
    }
    
    /**
     * Sets the ChunkStage property. "Upload chunk stage"
     */
    public void setChunkStage(ChunkStageType value) {
        this.chunkStage = value;
    }
    
    /**
     * Gets the ItemUploadState property.
     */
    public ItemUploadStateType getItemUploadState() {
        return this.itemUploadState;
    }
    
    /**
     * Sets the ItemUploadState property. "Upload state of item"
     */
    public void setItemUploadState(ItemUploadStateType value) {
        this.itemUploadState = value;
    }
    
    /**
     * Gets the ItemType property.
     */
    public ItemType getItemType() {
        return this.itemType;
    }
    
    /**
     * Sets the ItemType property. "Upload Item type"
     */
    public void setItemType(ItemType value) {
        this.itemType = value;
    }
    
    /**
     * Gets the UploadInBackground property.
     */
    public Boolean getUploadInBackground() {
        return this.uploadInBackground;
    }
    
    /**
     * Sets the UploadInBackground property. "Is the upload progressing in background?"
     */
    public void setUploadInBackground(Boolean value) {
        this.uploadInBackground = value;
    }
    
    /**
     * Gets the LocalIdentifier property.
     */
    public String getLocalIdentifier() {
        return this.localIdentifier;
    }
    
    /**
     * Sets the LocalIdentifier property. "A unique identifier representing the item locally"
     */
    public void setLocalIdentifier(String value) {
        this.localIdentifier = value;
    }
    
    /**
     * Gets the Extension property.
     */
    public String getExtension() {
        return this.extension;
    }
    
    /**
     * Sets the Extension property. "Extension of upload item"
     */
    public void setExtension(String value) {
        this.extension = value;
    }
    
    /**
     * Gets the TimeToUpload property.
     */
    public Integer getTimeToUpload() {
        return this.timeToUpload;
    }
    
    /**
     * Sets the TimeToUpload property. "Time it took to upload the item in seconds"
     */
    public void setTimeToUpload(Integer value) {
        this.timeToUpload = value;
    }
    
    /**
     * Gets the TelemetryErrorDetails property.
     */
    public TelemetryErrorDetails getTelemetryErrorDetails() {
        return this.telemetryErrorDetails;
    }
    
    /**
     * Sets the TelemetryErrorDetails property. "Error details with local error code"
     */
    public void setTelemetryErrorDetails(TelemetryErrorDetails value) {
        this.telemetryErrorDetails = value;
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
        
        if (completionStatus != null) {
            map.put("CompletionStatus", completionStatus.name());
        }
        
        if (chunkStage != null) {
            map.put("ChunkStage", chunkStage.name());
        }
        
        if (itemUploadState != null) {
            map.put("ItemUploadState", itemUploadState.name());
        }
        
        if (itemType != null) {
            map.put("ItemType", itemType.name());
        }
        
        if (uploadInBackground != null) {
            map.put("UploadInBackground", String.valueOf(this.uploadInBackground));
        }
        
        if (localIdentifier != null) {
            map.put("LocalIdentifier", String.valueOf(this.localIdentifier));
        }
        
        if (extension != null) {
            map.put("Extension", String.valueOf(this.extension));
        }
        
        if (timeToUpload != null) {
            map.put("TimeToUpload", String.valueOf(this.timeToUpload));
        }
        
        if (telemetryErrorDetails != null) {
            map.putAll(telemetryErrorDetails.getProperties());
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
        if (account == null) {
            blankProperties.add("account");
        }
        if (completionStatus == null) {
            blankProperties.add("completionStatus");
        }
        if (chunkStage == null) {
            blankProperties.add("chunkStage");
        }
        if (itemUploadState == null) {
            blankProperties.add("itemUploadState");
        }
        if (itemType == null) {
            blankProperties.add("itemType");
        }
        if (uploadInBackground == null) {
            blankProperties.add("uploadInBackground");
        }
        if (localIdentifier == null) {
            blankProperties.add("localIdentifier");
        }
        if (extension == null) {
            blankProperties.add("extension");
        }
        if (timeToUpload == null) {
            blankProperties.add("timeToUpload");
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
