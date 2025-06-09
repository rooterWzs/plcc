package com.plc.service;

import com.plc.model.VarModel;
import com.plc.model.ioserver.input.Vars;

import java.util.LinkedHashSet;
import java.util.List;

public interface VarService {

    boolean write(VarModel varModel);

    boolean add(VarModel plc);

    boolean importVar(List<Vars> varsList);

    boolean edit(VarModel plc);

    boolean remove(VarModel plc);

    LinkedHashSet<String> tagGroupList();

}
