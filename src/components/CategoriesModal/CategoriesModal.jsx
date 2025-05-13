import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  deleteCategory,
  updateCategory,
  fetchCategories,
} from "../../redux/category/operations";
import { selectCategories } from "../../redux/category/selectors";

import toast from "react-hot-toast";
import { Icon } from "../Icon/Icon";
import styles from "./CategoriesModal.module.css";
import { getTransactions } from "../../redux/transactions/operations";

const categorySchema = yup
  .string()
  .trim()
  .min(3, "Min 3 characters")
  .max(25, "Max 25 characters")
  .required("Category name is required");

export const CategoriesModal = ({
  onClose,
  type = "expenses",
  onSelectCategory,
  selectedCategoryId,
  updateSelectedCategoryName,
}) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories) || {};

  const [categoryName, setCategoryName] = useState("");
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [hoveredCategoryId, setHoveredCategoryId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const filteredCategories = Array.isArray(categories[type])
    ? categories[type]
    : [];

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleEditCategory = (category) => {
    setCategoryName(category.categoryName);
    setEditingCategoryId(category._id);
  };

  const handleAddOrEditCategory = async (e) => {
    e.preventDefault();

    try {
      await categorySchema.validate(categoryName);
      setErrorMessage("");

      const duplicateCategory = filteredCategories.find(
        (category) =>
          category.categoryName?.toLowerCase() ===
            categoryName.trim().toLowerCase() &&
          category._id !== editingCategoryId
      );

      if (duplicateCategory) {
        toast.error("Category name already exists");
        return;
      }

      if (editingCategoryId) {
        await dispatch(
          updateCategory({
            categoryId: editingCategoryId,
            categoryName: categoryName,
          })
        ).unwrap();
        toast.success("Category updated");
        if (editingCategoryId === selectedCategoryId) {
          updateSelectedCategoryName(categoryName);
        }
      } else {
        await dispatch(
          addCategory({ categoryName: categoryName, type: type })
        ).unwrap();
        toast.success("Category created");
      }
      await dispatch(getTransactions({ type }));
      setCategoryName("");
      setEditingCategoryId(null);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleDeleteCategory = async (id, type) => {
    try {
      await dispatch(deleteCategory({ id, type })).unwrap();
      toast.success("Category deleted");
      if (id === editingCategoryId) {
        setCategoryName("");
        setEditingCategoryId(null);
      }
    } catch (error) {
      if (error === "Can`t remove! Some transactions depend on this category") {
        toast("This category is in use", {
          style: {
            background: "#fff3cd",
            color: "#664d03",
            border: "1px solid #ffeeba",
          },
          icon: "⚠️",
        });
      } else {
        toast.error("Failed to delete category");
      }
    }
  };

  const handleCategorySelect = (category) => {
    onSelectCategory(category);
    setCategoryName("");
    setEditingCategoryId(null);
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") onClose();
  };

  return (
    <div
      className={styles.modalBackdrop}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className={styles.modalContent}>
        <div className={styles.closeButtonContainer}>
          <button onClick={onClose}>
            <Icon name="x" size={24} className={styles.closeIcon} />
          </button>
        </div>
        <h2 className={styles.modalTitle}>
          {type === "expenses" ? "Expenses" : "Incomes"}
        </h2>

        <div className={styles.allCategory}>
          <span className={styles.allCategoryText}>All Category</span>
        </div>

        <div className={styles.categoriesList}>
          <ul>
            {filteredCategories.map((category) => (
              <li
                key={category._id}
                className={styles.categoryItem}
                onMouseEnter={() => setHoveredCategoryId(category._id)}
                onMouseLeave={() => setHoveredCategoryId(null)}
              >
                <span className={styles.categoryName}>
                  {category.categoryName}
                </span>
                {hoveredCategoryId === category._id && (
                  <div className={styles.categoryActions}>
                    <button
                      type="button"
                      onClick={() => handleCategorySelect(category)}
                    >
                      <Icon name="check" size={16} className={styles.icon} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleEditCategory(category)}
                    >
                      <Icon name="edit" size={16} className={styles.icon} />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        handleDeleteCategory(category._id, category.type)
                      }
                    >
                      <Icon name="trash" size={16} className={styles.icon} />
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.newCategoryContainer}>
          <h2 className={styles.newCategoryTitle}>
            {editingCategoryId ? "Edit Category" : "New Category"}
          </h2>
          <form
            onSubmit={handleAddOrEditCategory}
            className={styles.newCategoryForm}
          >
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Enter the text"
              className={styles.newCategoryInput}
            />
            {errorMessage && <p className={styles.errorText}>{errorMessage}</p>}
            <button type="submit" className={styles.submitButton}>
              {editingCategoryId ? "Save" : "Add"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
