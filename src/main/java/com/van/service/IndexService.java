package com.van.service;

import com.van.pojo.Category;

import java.util.List;

/**
 * Created by dzw on 2018/12/20.
 */
public interface IndexService {
    /**
     *
     * 查询所有分类
     */
    List<Category> findAllCategory();

}
