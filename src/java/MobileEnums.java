/*
 * Generated using https://github.com/Microsoft/bond
*/

package com.microsoft.odsp.mobile;

public class MobileEnums
{
    
    /**
     * Enum AshaProductType.
     * An enum representing ASHA pillars
     */
    public enum AshaProductType
    {
        Files, PhotoStory, Photos, List
    }
    
    /**
     * Enum AshaPillarType.
     * An enum representing ASHA pillars
     */
    public enum AshaPillarType
    {
        Boot, IdealState, Purchase, View, Edit
    }
    
    /**
     * Enum AshaScenarioType.
     * An enum representing ASHA scenarios
     */
    public enum AshaScenarioType
    {
        AppBoot, CameraRollBackup, VideoPlayback, PhotoStoryHome, InAppPurchase, PDFDownloadFile, PDFOpenFile, PDFRenderFile, CreateItem, EditItem, DeleteItem
    }
    
    /**
     * Enum TelemetryEventType.
     * Event category defined by our team
     */
    public enum TelemetryEventType
    {
        Other, Action, AppLaunch, Auth, CameraBackup, InAppPurchase, Upload, QoS, Legacy, Experiment, CustomerPromise
    }
    
    /**
     * Enum NetworkType.
     * An enum representing the type of network available on the client device
     */
    public enum NetworkType
    {
        Unknown, Wifi, WAN, None
    }
    
    /**
     * Enum BuildType.
     * App build type enum
     */
    public enum BuildType
    {
        Debug, TestFlight, Preview, Prod
    }
    
    /**
     * Enum TabViewType.
     * The pivot or tab context enum
     */
    public enum TabViewType
    {
        None, Files, Photos, Recent, Shared, RecycleBin, Offline, Teamsites, Discover, Notifications, Search, Me
    }
    
    /**
     * Enum AccountType.
     * Account type enum
     */
    public enum AccountType
    {
        Unknown, Consumer, Business
    }
    
    /**
     * Enum BusinessAccountType.
     * Business account type enum
     */
    public enum BusinessAccountType
    {
        Unknown, AAD, FBA, NTLM, ADFS
    }
    
    /**
     * Enum AuthEnvironmentType.
     * Authentication Environment
     */
    public enum AuthEnvironmentType
    {
        Unknown, Global, Gallatin, Blackforest, GccHigh, DepartmentOfDefense
    }
    
    /**
     * Enum WorkloadType.
     * Account workload type
     */
    public enum WorkloadType
    {
        Unknown, ODC, ODB, TeamSite
    }
    
    /**
     * Enum PlaceVersionType.
     * Account place version
     */
    public enum PlaceVersionType
    {
        Unknown, ODC, SPO, SP2013, SP2016, SP2019
    }
    
    /**
     * Enum ItemType.
     * Item type enum
     */
    public enum ItemType
    {
        Unknown, Document, Photo, Video, Audio, Notebook, Folder, Album, Bundle, Site, DocumentLibrary, GroupFolder, Mixed, File, GeneratedAlbum
    }
    
    /**
     * Enum CompletionType.
     * Action completion status
     */
    public enum CompletionType
    {
        Canceled, Succeeded, Failed, BlockedMAM, BlockedDLP
    }
    
    /**
     * Enum UserRoleType.
     * User role
     */
    public enum UserRoleType
    {
        Unknown, Owner, CoOwner, Reader, Contributor, Submitter
    }
    
    /**
     * Enum SharingLevelType.
     * Item sharing level
     */
    public enum SharingLevelType
    {
        Unknown, Private, Shared, Public, PublicShared, PublicUnlisted, MembersCanRead, MembersCanWrite, Default
    }
    
    /**
     * Enum ExperimentAssignmentType.
     * Type of assignment for an experiment
     */
    public enum ExperimentAssignmentType
    {
        User, Device
    }
    
    /**
     * Enum PrivacyTagType.
     * Privacy Tag for an event, per Office Privacy Framework guidelines
     */
    public enum PrivacyTagType
    {
        RequiredServiceData, RequiredDiagnosticData, OptionalDiagnosticData
    }
    
    /**
     * Enum PrivacyDataType.
     * Privacy Data Type for an event, per MOJ Privacy Requirements
     */
    public enum PrivacyDataType
    {
        BrowsingHistory, DeviceConnectivityAndConfiguration, InkingTypingAndSpeechUtterance, ProductAndServicePerformance, ProductAndServiceUsage, SoftwareSetupAndInventory
    }
    
    /**
     * Enum AuthenticationFlowType.
     * An authentication flow related to the user sign-in experience.
     */
    public enum AuthenticationFlowType
    {
        Unknown, SignInAfterDisambiguation, SignUp, OnPrem, InTuneMAM
    }
    
    /**
     * Enum AuthenticationStepType.
     * An authentication step related to the user sign-in experience.
     */
    public enum AuthenticationStepType
    {
        Unknown, GetGraphToken, GetSPOTenantInfo, GetTenantToken, InTuneEnrollApplication, OnPremDisambiguation, OnPremGetFormDigest, OnPremGetMySite, OnPremMySitePreparation, OnPremRetrieveSignInDialog, OnPremSignInDialog, ShowSignInUI, SignInSilently, GetFederationProvider, GetADALConfigurations, GetUserConnectedToken, GetProfile
    }
    
    /**
     * Enum AuthenticationBrokerType.
     * An authentication broker app used with the user sign-in experience.
     */
    public enum AuthenticationBrokerType
    {
        Unknown, None, CompanyPortal, AzureAuthenticator
    }
    
    /**
     * Enum PowerStatusType.
     * Battery charging status
     */
    public enum PowerStatusType
    {
        Unknown, Charging, Full, Unplugged
    }
    
    /**
     * Enum SortOrderType.
     * Sort order
     */
    public enum SortOrderType
    {
        Default, NameAlphabetical, NameReverseAlphabetical, Newest, Oldest, Largest, Smallest, DateSharedNewest, DateSharedOldest, SharedByAscending, SharedByDescending
    }
    
    /**
     * Enum ItemLayoutType.
     * Item view layout
     */
    public enum ItemLayoutType
    {
        Details, Tiles
    }
    
    /**
     * Enum ShareOperationType.
     * Method of sharing
     */
    public enum ShareOperationType
    {
        InvitePeople, CopyLink, ShareLink, SendFile
    }
    
    /**
     * Enum SharingPermissionLevelType.
     * Permission level during sharing
     */
    public enum SharingPermissionLevelType
    {
        None, ViewOnly, ViewAndEdit
    }
    
    /**
     * Enum ActionEntryPointType.
     * Entry point for Action
     */
    public enum ActionEntryPointType
    {
        ActionBar, FAB, AddButton, OnItemCommand, DragAndDrop, ShortcutMenu, Tabbar, SiriShortcut
    }
    
    /**
     * Enum ChunkStageType.
     * Stage of chunk upload for which this event is recorded
     */
    public enum ChunkStageType
    {
        ChunkUploadNotStarted, ChunkCreationSession, ChunkFragment, ChunkCloseSession
    }
    
    /**
     * Enum ItemUploadStateType.
     * Upload state of the item
     */
    public enum ItemUploadStateType
    {
        UploadCancelled, Uploading, UploadInQueue, UploadFinished, UploadFailed, ItemAlreadyUploaded
    }
    
    /**
     * Enum CameraBackupRefreshReasonType.
     * Reason for camera backup scan to be kicked off
     */
    public enum CameraBackupRefreshReasonType
    {
        Unknown, BackgroundFetch, LocationChange, AppLaunchForeground, AppLaunchBackground, AppResume, UploadStatusChange, SettingChangeAllowCameraUpload, SettingChangeAllVideoUpload, ScreenshotNotification, GetChangesCompleted, SilentPushNotification, SettingChangeUseMobileNetwork, LocationChangeDueToLastKnownLocationOld, LocationChangeInitialization, AzmePushNotification, OtherRemoteNotification, NetworkStatusChange
    }
    
    /**
     * Enum EnvironmentType.
     * The environment type
     */
    public enum EnvironmentType
    {
        Unknown, PPE, MSIT, PROD
    }
    
    /**
     * Enum OperationResultType.
     * A result used to measure quality / reliability of an operation
     */
    public enum OperationResultType
    {
        Unknown, Success, Diagnostic, UnexpectedFailure, Cancelled, ExpectedFailure
    }
}
