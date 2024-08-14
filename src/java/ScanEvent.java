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
 * GENERATED Data contract class ScanEvent.
 *
 * "User action Scan event"
 */
public class ScanEvent extends ActionEvent
{
    private String name = "Scan";
    
    private Integer numberOfPages;
    
    private Integer numberOfRotates;
    
    private Integer numberOfCrops;
    
    private Integer numberOfDeletes;
    
    /**
     * Creates a new instance of the ScanEvent class.
     *
     * @param buildType    App build type
     * @param privacyTag    Privacy tag as defined by Office Privacy Framework guidelines. Note: not logged in telemetry.
     * @param privacyDataType    Privacy data type defined by telemetry loggers per MOJ Privacy requirements. Note: not logged in telemetry.
     * @param account    The account performing the event
     * @param completionStatus    Did the action complete
     * @param tab    Which pivot was this action called from
     * @param actionEntryPoint    Entry point for Action
     * @param items    Summary of items being acted upon
     * @param numberOfPages    Number of pages in the scan
     */
    public ScanEvent(
            Integer numberOfPages,
            TelemetryItemSetDetails items,
            ActionEntryPointType actionEntryPoint,
            TabViewType tab,
            CompletionType completionStatus,
            TelemetryAccountDetails account,
            PrivacyDataType privacyDataType,
            PrivacyTagType privacyTag,
            BuildType buildType) {
        super(items, actionEntryPoint, tab, completionStatus, account, privacyDataType, privacyTag, buildType);
        this.numberOfPages = numberOfPages;
    }
    
    /**
     * Gets the Name property.
     */
    @Override
    public String getName() {
        return this.name;
    }
    
    /**
     * Gets the NumberOfPages property.
     */
    public Integer getNumberOfPages() {
        return this.numberOfPages;
    }
    
    /**
     * Sets the NumberOfPages property. "Number of pages in the scan"
     */
    public void setNumberOfPages(Integer value) {
        this.numberOfPages = value;
    }
    
    /**
     * Gets the NumberOfRotates property.
     */
    public Integer getNumberOfRotates() {
        return this.numberOfRotates;
    }
    
    /**
     * Sets the NumberOfRotates property. "Number of times the user rotated a page, if supported"
     */
    public void setNumberOfRotates(Integer value) {
        this.numberOfRotates = value;
    }
    
    /**
     * Gets the NumberOfCrops property.
     */
    public Integer getNumberOfCrops() {
        return this.numberOfCrops;
    }
    
    /**
     * Sets the NumberOfCrops property. "Number of times the user cropped a page, if supported"
     */
    public void setNumberOfCrops(Integer value) {
        this.numberOfCrops = value;
    }
    
    /**
     * Gets the NumberOfDeletes property.
     */
    public Integer getNumberOfDeletes() {
        return this.numberOfDeletes;
    }
    
    /**
     * Sets the NumberOfDeletes property. "Number of times the user deleted a page, if supported"
     */
    public void setNumberOfDeletes(Integer value) {
        this.numberOfDeletes = value;
    }
    

    /**
     * Retrieves the properties as a Map
     */
    public Map<String, String> getProperties() {
        Map<String, String> map = super.getProperties();

        if (name != null) {
            map.put("Name", String.valueOf(this.name));
        }
        
        if (numberOfPages != null) {
            map.put("NumberOfPages", String.valueOf(this.numberOfPages));
        }
        
        if (numberOfRotates != null) {
            map.put("NumberOfRotates", String.valueOf(this.numberOfRotates));
        }
        
        if (numberOfCrops != null) {
            map.put("NumberOfCrops", String.valueOf(this.numberOfCrops));
        }
        
        if (numberOfDeletes != null) {
            map.put("NumberOfDeletes", String.valueOf(this.numberOfDeletes));
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
        if (numberOfPages == null) {
            blankProperties.add("numberOfPages");
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
