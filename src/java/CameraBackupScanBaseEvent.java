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
 * GENERATED Data contract class CameraBackupScanBaseEvent.
 *
 * "Abstract base event for camera backup scan events"
 */
public class CameraBackupScanBaseEvent extends TelemetryEvent
{
    private TelemetryEventType eventType = TelemetryEventType.CameraBackup;
    
    private PrivacyTagType privacyTag = PrivacyTagType.RequiredServiceData;
    
    private PrivacyDataType privacyDataType = PrivacyDataType.ProductAndServiceUsage;
    
    private TelemetryAccountDetails account;
    
    private CameraBackupRefreshReasonType scanReason;
    
    private Boolean uploadInBackground;
    
    private Boolean videoUploadEnabled;
    
    private Boolean dataUsageEnabled;
    
    private Boolean accessToPhotos;
    
    private Double batteryLevel;
    
    private PowerStatusType powerStatus;
    
    private Integer timeToScan;
    
    private Integer numberOfPhotosFound;
    
    private Integer numberOfVideosFound;
    
    private Integer numberOfItemsSkippedVideoUploadDisabled;
    
    private Integer numberOfItemsSkippedItemAlreadyScanned;
    
    private Integer numberOfItemsSkippedItemHashMatched;
    
    private Integer numberOfItemsSkippedExistsInOneDrive;
    
    private Integer timeSinceCameraBackupTurnedOn;
    
    private Integer oldestItemFound;
    
    private Integer numberOfItemsCouldNotBeHashed;
    
    private Integer numberOfItemsHashed;
    
    private Integer timeTakenToHash;
    
    private Integer totalNumberOfItemsScanned;
    
    private Integer numberOfItemsQueriedFromMetadataTable;
    
    private Integer timeSpentInQueryingMetadata;
    
    private Integer numberOfItemsQueriedFromUploadTable;
    
    private Integer timeSpentInQueryingUploadTable;
    
    private Integer timeSpentInSyncingMetadataItemsWithServer;
    
    /**
     * Creates a new instance of the CameraBackupScanBaseEvent class.
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
    public CameraBackupScanBaseEvent(
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
        super(privacyDataType, privacyTag, buildType);
        this.account = account;
        this.scanReason = scanReason;
        this.uploadInBackground = uploadInBackground;
        this.videoUploadEnabled = videoUploadEnabled;
        this.dataUsageEnabled = dataUsageEnabled;
        this.accessToPhotos = accessToPhotos;
        this.batteryLevel = batteryLevel;
        this.powerStatus = powerStatus;
        this.timeToScan = timeToScan;
        this.numberOfPhotosFound = numberOfPhotosFound;
        this.numberOfVideosFound = numberOfVideosFound;
        this.numberOfItemsSkippedVideoUploadDisabled = numberOfItemsSkippedVideoUploadDisabled;
        this.numberOfItemsSkippedItemAlreadyScanned = numberOfItemsSkippedItemAlreadyScanned;
        this.numberOfItemsSkippedItemHashMatched = numberOfItemsSkippedItemHashMatched;
        this.numberOfItemsSkippedExistsInOneDrive = numberOfItemsSkippedExistsInOneDrive;
        this.timeSinceCameraBackupTurnedOn = timeSinceCameraBackupTurnedOn;
        this.oldestItemFound = oldestItemFound;
        this.numberOfItemsCouldNotBeHashed = numberOfItemsCouldNotBeHashed;
        this.numberOfItemsHashed = numberOfItemsHashed;
        this.timeTakenToHash = timeTakenToHash;
        this.totalNumberOfItemsScanned = totalNumberOfItemsScanned;
        this.numberOfItemsQueriedFromMetadataTable = numberOfItemsQueriedFromMetadataTable;
        this.timeSpentInQueryingMetadata = timeSpentInQueryingMetadata;
        this.numberOfItemsQueriedFromUploadTable = numberOfItemsQueriedFromUploadTable;
        this.timeSpentInQueryingUploadTable = timeSpentInQueryingUploadTable;
        this.timeSpentInSyncingMetadataItemsWithServer = timeSpentInSyncingMetadataItemsWithServer;
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
     * Sets the PrivacyTag property. "CameraBackup events are all required service data."
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
     * Sets the PrivacyDataType property. "CameraBackup events are all service usage."
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
     * Gets the ScanReason property.
     */
    public CameraBackupRefreshReasonType getScanReason() {
        return this.scanReason;
    }
    
    /**
     * Sets the ScanReason property. "Reason for camera backup scan to be kicked off"
     */
    public void setScanReason(CameraBackupRefreshReasonType value) {
        this.scanReason = value;
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
     * Gets the VideoUploadEnabled property.
     */
    public Boolean getVideoUploadEnabled() {
        return this.videoUploadEnabled;
    }
    
    /**
     * Sets the VideoUploadEnabled property. "Video upload enabled"
     */
    public void setVideoUploadEnabled(Boolean value) {
        this.videoUploadEnabled = value;
    }
    
    /**
     * Gets the DataUsageEnabled property.
     */
    public Boolean getDataUsageEnabled() {
        return this.dataUsageEnabled;
    }
    
    /**
     * Sets the DataUsageEnabled property. "Data usage enabled"
     */
    public void setDataUsageEnabled(Boolean value) {
        this.dataUsageEnabled = value;
    }
    
    /**
     * Gets the AccessToPhotos property.
     */
    public Boolean getAccessToPhotos() {
        return this.accessToPhotos;
    }
    
    /**
     * Sets the AccessToPhotos property. "App has permission to access device photos"
     */
    public void setAccessToPhotos(Boolean value) {
        this.accessToPhotos = value;
    }
    
    /**
     * Gets the BatteryLevel property.
     */
    public Double getBatteryLevel() {
        return this.batteryLevel;
    }
    
    /**
     * Sets the BatteryLevel property. "Battery level as percentage 0-100"
     */
    public void setBatteryLevel(Double value) {
        this.batteryLevel = value;
    }
    
    /**
     * Gets the PowerStatus property.
     */
    public PowerStatusType getPowerStatus() {
        return this.powerStatus;
    }
    
    /**
     * Sets the PowerStatus property. "Battery charging status"
     */
    public void setPowerStatus(PowerStatusType value) {
        this.powerStatus = value;
    }
    
    /**
     * Gets the TimeToScan property.
     */
    public Integer getTimeToScan() {
        return this.timeToScan;
    }
    
    /**
     * Sets the TimeToScan property. "Time taken to scan in seconds"
     */
    public void setTimeToScan(Integer value) {
        this.timeToScan = value;
    }
    
    /**
     * Gets the NumberOfPhotosFound property.
     */
    public Integer getNumberOfPhotosFound() {
        return this.numberOfPhotosFound;
    }
    
    /**
     * Sets the NumberOfPhotosFound property. "Number of new photos queued for upload during the scan"
     */
    public void setNumberOfPhotosFound(Integer value) {
        this.numberOfPhotosFound = value;
    }
    
    /**
     * Gets the NumberOfVideosFound property.
     */
    public Integer getNumberOfVideosFound() {
        return this.numberOfVideosFound;
    }
    
    /**
     * Sets the NumberOfVideosFound property. "Number of new videos queued for upload during the scan"
     */
    public void setNumberOfVideosFound(Integer value) {
        this.numberOfVideosFound = value;
    }
    
    /**
     * Gets the NumberOfItemsSkippedVideoUploadDisabled property.
     */
    public Integer getNumberOfItemsSkippedVideoUploadDisabled() {
        return this.numberOfItemsSkippedVideoUploadDisabled;
    }
    
    /**
     * Sets the NumberOfItemsSkippedVideoUploadDisabled property. "Number of items skipped because video upload setting was disabled"
     */
    public void setNumberOfItemsSkippedVideoUploadDisabled(Integer value) {
        this.numberOfItemsSkippedVideoUploadDisabled = value;
    }
    
    /**
     * Gets the NumberOfItemsSkippedItemAlreadyScanned property.
     */
    public Integer getNumberOfItemsSkippedItemAlreadyScanned() {
        return this.numberOfItemsSkippedItemAlreadyScanned;
    }
    
    /**
     * Sets the NumberOfItemsSkippedItemAlreadyScanned property. "Number of items skipped because they were already scanned in a previous scan"
     */
    public void setNumberOfItemsSkippedItemAlreadyScanned(Integer value) {
        this.numberOfItemsSkippedItemAlreadyScanned = value;
    }
    
    /**
     * Gets the NumberOfItemsSkippedItemHashMatched property.
     */
    public Integer getNumberOfItemsSkippedItemHashMatched() {
        return this.numberOfItemsSkippedItemHashMatched;
    }
    
    /**
     * Sets the NumberOfItemsSkippedItemHashMatched property. "Number of items skipped because their hash matched with an existing item in OneDrive"
     */
    public void setNumberOfItemsSkippedItemHashMatched(Integer value) {
        this.numberOfItemsSkippedItemHashMatched = value;
    }
    
    /**
     * Gets the NumberOfItemsSkippedExistsInOneDrive property.
     */
    public Integer getNumberOfItemsSkippedExistsInOneDrive() {
        return this.numberOfItemsSkippedExistsInOneDrive;
    }
    
    /**
     * Sets the NumberOfItemsSkippedExistsInOneDrive property. "Number of items skipped because an item with the same name\creation date it already exists in OneDrive"
     */
    public void setNumberOfItemsSkippedExistsInOneDrive(Integer value) {
        this.numberOfItemsSkippedExistsInOneDrive = value;
    }
    
    /**
     * Gets the TimeSinceCameraBackupTurnedOn property.
     */
    public Integer getTimeSinceCameraBackupTurnedOn() {
        return this.timeSinceCameraBackupTurnedOn;
    }
    
    /**
     * Sets the TimeSinceCameraBackupTurnedOn property. "Time Since camera backup was last turned on"
     */
    public void setTimeSinceCameraBackupTurnedOn(Integer value) {
        this.timeSinceCameraBackupTurnedOn = value;
    }
    
    /**
     * Gets the OldestItemFound property.
     */
    public Integer getOldestItemFound() {
        return this.oldestItemFound;
    }
    
    /**
     * Sets the OldestItemFound property. "Age of the oldest item found"
     */
    public void setOldestItemFound(Integer value) {
        this.oldestItemFound = value;
    }
    
    /**
     * Gets the NumberOfItemsCouldNotBeHashed property.
     */
    public Integer getNumberOfItemsCouldNotBeHashed() {
        return this.numberOfItemsCouldNotBeHashed;
    }
    
    /**
     * Sets the NumberOfItemsCouldNotBeHashed property. "Number of items skipped because they could not be hashed"
     */
    public void setNumberOfItemsCouldNotBeHashed(Integer value) {
        this.numberOfItemsCouldNotBeHashed = value;
    }
    
    /**
     * Gets the NumberOfItemsHashed property.
     */
    public Integer getNumberOfItemsHashed() {
        return this.numberOfItemsHashed;
    }
    
    /**
     * Sets the NumberOfItemsHashed property. "Number of items hashed during the scan"
     */
    public void setNumberOfItemsHashed(Integer value) {
        this.numberOfItemsHashed = value;
    }
    
    /**
     * Gets the TimeTakenToHash property.
     */
    public Integer getTimeTakenToHash() {
        return this.timeTakenToHash;
    }
    
    /**
     * Sets the TimeTakenToHash property. "Total time taken to hash"
     */
    public void setTimeTakenToHash(Integer value) {
        this.timeTakenToHash = value;
    }
    
    /**
     * Gets the TotalNumberOfItemsScanned property.
     */
    public Integer getTotalNumberOfItemsScanned() {
        return this.totalNumberOfItemsScanned;
    }
    
    /**
     * Sets the TotalNumberOfItemsScanned property. "Total number of items scanned"
     */
    public void setTotalNumberOfItemsScanned(Integer value) {
        this.totalNumberOfItemsScanned = value;
    }
    
    /**
     * Gets the NumberOfItemsQueriedFromMetadataTable property.
     */
    public Integer getNumberOfItemsQueriedFromMetadataTable() {
        return this.numberOfItemsQueriedFromMetadataTable;
    }
    
    /**
     * Sets the NumberOfItemsQueriedFromMetadataTable property. "Total number of items queried from Metadata table"
     */
    public void setNumberOfItemsQueriedFromMetadataTable(Integer value) {
        this.numberOfItemsQueriedFromMetadataTable = value;
    }
    
    /**
     * Gets the TimeSpentInQueryingMetadata property.
     */
    public Integer getTimeSpentInQueryingMetadata() {
        return this.timeSpentInQueryingMetadata;
    }
    
    /**
     * Sets the TimeSpentInQueryingMetadata property. "Time spent in querying from Metadata table"
     */
    public void setTimeSpentInQueryingMetadata(Integer value) {
        this.timeSpentInQueryingMetadata = value;
    }
    
    /**
     * Gets the NumberOfItemsQueriedFromUploadTable property.
     */
    public Integer getNumberOfItemsQueriedFromUploadTable() {
        return this.numberOfItemsQueriedFromUploadTable;
    }
    
    /**
     * Sets the NumberOfItemsQueriedFromUploadTable property. "Total number of items queried from Upload (SyncStatus) table"
     */
    public void setNumberOfItemsQueriedFromUploadTable(Integer value) {
        this.numberOfItemsQueriedFromUploadTable = value;
    }
    
    /**
     * Gets the TimeSpentInQueryingUploadTable property.
     */
    public Integer getTimeSpentInQueryingUploadTable() {
        return this.timeSpentInQueryingUploadTable;
    }
    
    /**
     * Sets the TimeSpentInQueryingUploadTable property. "Time spent in querying from upload (SyncStatus) table"
     */
    public void setTimeSpentInQueryingUploadTable(Integer value) {
        this.timeSpentInQueryingUploadTable = value;
    }
    
    /**
     * Gets the TimeSpentInSyncingMetadataItemsWithServer property.
     */
    public Integer getTimeSpentInSyncingMetadataItemsWithServer() {
        return this.timeSpentInSyncingMetadataItemsWithServer;
    }
    
    /**
     * Sets the TimeSpentInSyncingMetadataItemsWithServer property. "Time spent in syncing Metadata with the server - GetChanges"
     */
    public void setTimeSpentInSyncingMetadataItemsWithServer(Integer value) {
        this.timeSpentInSyncingMetadataItemsWithServer = value;
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
        
        if (scanReason != null) {
            map.put("ScanReason", scanReason.name());
        }
        
        if (uploadInBackground != null) {
            map.put("UploadInBackground", String.valueOf(this.uploadInBackground));
        }
        
        if (videoUploadEnabled != null) {
            map.put("VideoUploadEnabled", String.valueOf(this.videoUploadEnabled));
        }
        
        if (dataUsageEnabled != null) {
            map.put("DataUsageEnabled", String.valueOf(this.dataUsageEnabled));
        }
        
        if (accessToPhotos != null) {
            map.put("AccessToPhotos", String.valueOf(this.accessToPhotos));
        }
        
        if (batteryLevel != null) {
            map.put("BatteryLevel", String.valueOf(this.batteryLevel));
        }
        
        if (powerStatus != null) {
            map.put("PowerStatus", powerStatus.name());
        }
        
        if (timeToScan != null) {
            map.put("TimeToScan", String.valueOf(this.timeToScan));
        }
        
        if (numberOfPhotosFound != null) {
            map.put("NumberOfPhotosFound", String.valueOf(this.numberOfPhotosFound));
        }
        
        if (numberOfVideosFound != null) {
            map.put("NumberOfVideosFound", String.valueOf(this.numberOfVideosFound));
        }
        
        if (numberOfItemsSkippedVideoUploadDisabled != null) {
            map.put("NumberOfItemsSkippedVideoUploadDisabled", String.valueOf(this.numberOfItemsSkippedVideoUploadDisabled));
        }
        
        if (numberOfItemsSkippedItemAlreadyScanned != null) {
            map.put("NumberOfItemsSkippedItemAlreadyScanned", String.valueOf(this.numberOfItemsSkippedItemAlreadyScanned));
        }
        
        if (numberOfItemsSkippedItemHashMatched != null) {
            map.put("NumberOfItemsSkippedItemHashMatched", String.valueOf(this.numberOfItemsSkippedItemHashMatched));
        }
        
        if (numberOfItemsSkippedExistsInOneDrive != null) {
            map.put("NumberOfItemsSkippedExistsInOneDrive", String.valueOf(this.numberOfItemsSkippedExistsInOneDrive));
        }
        
        if (timeSinceCameraBackupTurnedOn != null) {
            map.put("TimeSinceCameraBackupTurnedOn", String.valueOf(this.timeSinceCameraBackupTurnedOn));
        }
        
        if (oldestItemFound != null) {
            map.put("OldestItemFound", String.valueOf(this.oldestItemFound));
        }
        
        if (numberOfItemsCouldNotBeHashed != null) {
            map.put("NumberOfItemsCouldNotBeHashed", String.valueOf(this.numberOfItemsCouldNotBeHashed));
        }
        
        if (numberOfItemsHashed != null) {
            map.put("NumberOfItemsHashed", String.valueOf(this.numberOfItemsHashed));
        }
        
        if (timeTakenToHash != null) {
            map.put("TimeTakenToHash", String.valueOf(this.timeTakenToHash));
        }
        
        if (totalNumberOfItemsScanned != null) {
            map.put("TotalNumberOfItemsScanned", String.valueOf(this.totalNumberOfItemsScanned));
        }
        
        if (numberOfItemsQueriedFromMetadataTable != null) {
            map.put("NumberOfItemsQueriedFromMetadataTable", String.valueOf(this.numberOfItemsQueriedFromMetadataTable));
        }
        
        if (timeSpentInQueryingMetadata != null) {
            map.put("TimeSpentInQueryingMetadata", String.valueOf(this.timeSpentInQueryingMetadata));
        }
        
        if (numberOfItemsQueriedFromUploadTable != null) {
            map.put("NumberOfItemsQueriedFromUploadTable", String.valueOf(this.numberOfItemsQueriedFromUploadTable));
        }
        
        if (timeSpentInQueryingUploadTable != null) {
            map.put("TimeSpentInQueryingUploadTable", String.valueOf(this.timeSpentInQueryingUploadTable));
        }
        
        if (timeSpentInSyncingMetadataItemsWithServer != null) {
            map.put("TimeSpentInSyncingMetadataItemsWithServer", String.valueOf(this.timeSpentInSyncingMetadataItemsWithServer));
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
        if (scanReason == null) {
            blankProperties.add("scanReason");
        }
        if (uploadInBackground == null) {
            blankProperties.add("uploadInBackground");
        }
        if (videoUploadEnabled == null) {
            blankProperties.add("videoUploadEnabled");
        }
        if (dataUsageEnabled == null) {
            blankProperties.add("dataUsageEnabled");
        }
        if (accessToPhotos == null) {
            blankProperties.add("accessToPhotos");
        }
        if (batteryLevel == null) {
            blankProperties.add("batteryLevel");
        }
        if (powerStatus == null) {
            blankProperties.add("powerStatus");
        }
        if (timeToScan == null) {
            blankProperties.add("timeToScan");
        }
        if (numberOfPhotosFound == null) {
            blankProperties.add("numberOfPhotosFound");
        }
        if (numberOfVideosFound == null) {
            blankProperties.add("numberOfVideosFound");
        }
        if (numberOfItemsSkippedVideoUploadDisabled == null) {
            blankProperties.add("numberOfItemsSkippedVideoUploadDisabled");
        }
        if (numberOfItemsSkippedItemAlreadyScanned == null) {
            blankProperties.add("numberOfItemsSkippedItemAlreadyScanned");
        }
        if (numberOfItemsSkippedItemHashMatched == null) {
            blankProperties.add("numberOfItemsSkippedItemHashMatched");
        }
        if (numberOfItemsSkippedExistsInOneDrive == null) {
            blankProperties.add("numberOfItemsSkippedExistsInOneDrive");
        }
        if (timeSinceCameraBackupTurnedOn == null) {
            blankProperties.add("timeSinceCameraBackupTurnedOn");
        }
        if (oldestItemFound == null) {
            blankProperties.add("oldestItemFound");
        }
        if (numberOfItemsCouldNotBeHashed == null) {
            blankProperties.add("numberOfItemsCouldNotBeHashed");
        }
        if (numberOfItemsHashed == null) {
            blankProperties.add("numberOfItemsHashed");
        }
        if (timeTakenToHash == null) {
            blankProperties.add("timeTakenToHash");
        }
        if (totalNumberOfItemsScanned == null) {
            blankProperties.add("totalNumberOfItemsScanned");
        }
        if (numberOfItemsQueriedFromMetadataTable == null) {
            blankProperties.add("numberOfItemsQueriedFromMetadataTable");
        }
        if (timeSpentInQueryingMetadata == null) {
            blankProperties.add("timeSpentInQueryingMetadata");
        }
        if (numberOfItemsQueriedFromUploadTable == null) {
            blankProperties.add("numberOfItemsQueriedFromUploadTable");
        }
        if (timeSpentInQueryingUploadTable == null) {
            blankProperties.add("timeSpentInQueryingUploadTable");
        }
        if (timeSpentInSyncingMetadataItemsWithServer == null) {
            blankProperties.add("timeSpentInSyncingMetadataItemsWithServer");
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
