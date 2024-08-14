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
 * GENERATED Data contract class ManualUploadResultEvent.
 *
 * "An event that represents ODC manual upload result."
 */
public class ManualUploadResultEvent extends UploadResultBaseEvent
{
    private SharingLevelType sharingLevel;
    
    /**
     * Creates a new instance of the ManualUploadResultEvent class.
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
     * @param sharingLevel    Sharing level of the parent folder where the upload is attempted
     */
    public ManualUploadResultEvent(
            SharingLevelType sharingLevel,
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
        super(timeToUpload, extension, localIdentifier, uploadInBackground, itemType, itemUploadState, chunkStage, completionStatus, account, privacyDataType, privacyTag, buildType);
        this.sharingLevel = sharingLevel;
    }
    
    /**
     * Gets the SharingLevel property.
     */
    public SharingLevelType getSharingLevel() {
        return this.sharingLevel;
    }
    
    /**
     * Sets the SharingLevel property. "Sharing level of the parent folder where the upload is attempted"
     */
    public void setSharingLevel(SharingLevelType value) {
        this.sharingLevel = value;
    }
    

    /**
     * Retrieves the properties as a Map
     */
    public Map<String, String> getProperties() {
        Map<String, String> map = super.getProperties();

        if (sharingLevel != null) {
            map.put("SharingLevel", sharingLevel.name());
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

        if (sharingLevel == null) {
            blankProperties.add("sharingLevel");
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
