package com.plc.service.impl;

import com.plc.service.LocalStorageService;
import org.springframework.stereotype.Service;

@Service
public class LocalStorageServiceImpl implements LocalStorageService {

    @Override
    public boolean storeLocal() {

        return false;
    }

    @Override
    public boolean remove() {
        return false;
    }

}
