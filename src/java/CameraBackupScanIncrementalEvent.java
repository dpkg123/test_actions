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
 * GENERATED Data contract class CameraBackupScanIncrementalEvent.
 *
 * "An event that represents the incremental camera backup scan events"
 */
public class CameraBackupScanIncrementalEvent extends CameraBackupScanBaseEvent
{
    private String name = "CameraBackupScanIncremental";
    
    /**
     * Creates a new instance of the CameraBackupScanIncrementalEvent class.
     *
     * @param buildType    App build type
     * @param privacyTag    Privacy tag as defined by Office Privacy Framework guidelines. Note: not logged in telemetry.
     * @param privacyDataType    Privacy data type defined by telemetry loggers per MOJ Privacy requirements. Note: not logged in telemetry.
     * @param account    The account performing the event
     * @param scanReason    Reason for camera backup scan to be kicked off
     * @param uploadInBackground    Is the upload progressing in background?
     * @param videoUploadEnabled    Video upload enabled
     * @param dataUsageEnabled    Data usage enabled
     * @param accessToPhotos    App has permission to access device photos
     * @param batteryLevel    Battery level as percentage 0-100
     * @param powerStatus    Battery charging status
     * @param timeToScan    Time taken to scan in seconds
     * @param numberOfPhotosFound    Number of new photos queued for upload during the scan
     * @param numberOfVideosFound    Number of new videos queued for upload during the scan
     * @param numberOfItemsSkippedVideoUploadDisabled    Number of items skipped because video upload setting was disabled
     * @param numberOfItemsSkippedItemAlreadyScanned    Number of items skipped because they were already scanned in a previous scan
     * @param numberOfItemsSkippedItemHashMatched    Number of items skipped because their hash matched with an existing item in OneDrive
     * @param numberOfItemsSkippedExistsInOneDrive    Number of items skipped because an item with the same name\creation date it already exists in OneDrive
     * @param timeSinceCameraBackupTurnedOn    Time Since camera backup was last turned on
     * @param oldestItemFound    Age of the oldest item found
     * @param numberOfItemsCouldNotBeHashed    Number of items skipped because they could not be hashed
     * @param numberOfItemsHashed    Number of items hashed during the scan
     * @param timeTakenToHash    Total time taken to hash
     * @param totalNumberOfItemsScanned    Total number of items scanned
     * @param numberOfItemsQueriedFromMetadataTable    Total number of items queried from Metadata table
     * @param timeSpentInQueryingMetadata    Time spent in querying from Metadata table
     * @param numberOfItemsQueriedFromUploadTable    Total number of items queried from Upload (SyncStatus) table
     * @param timeSpentInQueryingUploadTable    Time spent in querying from upload (SyncStatus) table
     * @param timeSpentInSyncingMetadataItemsWithServer    Time spent in syncing Metadata with the server - GetChanges
     */
    public CameraBackupScanIncrementalEvent(
            Integer timeSpentInSyncingMetadataItemsWithServer,
            Integer timeSpentInQueryingUploadTable,
            Integer numberOfItemsQueriedFromUploadTable,
            Integer timeSpentInQueryingMetadata,
            Integer numberOfItemsQueriedFromMetadataTable,
            Integer totalNumberOfItemsScanned,
            Integer timeTakenToHash,
            Integer numberOfItemsHashed,
            Integer numberOfItemsCouldNotBeHashed,
            Integer oldestItemFound,
            Integer timeSinceCameraBackupTurnedOn,
            Integer numberOfItemsSkippedExistsInOneDrive,
            Integer numberOfItemsSkippedItemHashMatched,
            Integer numberOfItemsSkippedItemAlreadyScanned,
            Integer numberOfItemsSkippedVideoUploadDisabled,
            Integer numberOfVideosFound,
            Integer numberOfPhotosFound,
            Integer timeToScan,
            PowerStatusType powerStatus,
            Double batteryLevel,
            Boolean accessToPhotos,
            Boolean dataUsageEnabled,
            Boolean videoUploadEnabled,
            Boolean uploadInBackground,
            CameraBackupRefreshReasonType scanReason,
            TelemetryAccountDetails account,
            PrivacyDataType privacyDataType,
            PrivacyTagType privacyTag,
            BuildType buildType) {
        super(timeSpentInSyncingMetadataItemsWithServer, timeSpentInQueryingUploadTable, numberOfItemsQueriedFromUploadTable, timeSpentInQueryingMetadata, numberOfItemsQueriedFromMetadataTable, totalNumberOfItemsScanned, timeTakenToHash, numberOfItemsHashed, numberOfItemsCouldNotBeHashed, oldestItemFound, timeSinceCameraBackupTurnedOn, numberOfItemsSkippedExistsInOneDrive, numberOfItemsSkippedItemHashMatched, numberOfItemsSkippedItemAlreadyScanned, numberOfItemsSkippedVideoUploadDisabled, numberOfVideosFound, numberOfPhotosFound, timeToScan, powerStatus, batteryLevel, accessToPhotos, dataUsageEnabled, videoUploadEnabled, uploadInBackground, scanReason, account, privacyDataType, privacyTag, buildType);
    }
    
    /**
     * Gets the Name property.
     */
    @Override
    public String getName() {
        return this.name;
    }
    

    /**
     * Retrieves the properties as a Map
     */
    public Map<String, String> getProperties() {
        Map<String, String> map = super.getProperties();

        if (name != null) {
            map.put("Name", String.valueOf(this.name));
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
