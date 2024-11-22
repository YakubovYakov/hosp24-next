"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./Preview.css";
import { searchEntities } from "../../utils/api"; // Здесь остается логика поиска

export default function Preview() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchButtonRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 1) {
      setLoading(true);
      try {
        const doctorsResults = await searchEntities(value, "employers");
        const departmentsResults = await searchEntities(value, "departments");

        const doctorsResultsWithType = doctorsResults.map((result) => ({
          ...result,
          type: "employers",
        }));

        const departmentsResultsWithType = departmentsResults.map((result) => ({
          ...result,
          type: "departments",
        }));

        const combinedResults = [
          ...doctorsResultsWithType,
          ...departmentsResultsWithType,
        ];

        setResults(combinedResults);
      } catch (error) {
        console.error("Ошибка при поиске:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <section className="preview">
      <div className="preview__background">
        <div className="preview__search">
          <form className="preview__form">
            <h1 className="preview__title">Хочу найти</h1>
            <div className="preview__input-container">
              <input
                className="preview__input"
                placeholder="Введите запрос"
                value={searchTerm}
                onChange={handleInputChange}
              />
              {loading && <div className="preview__loading">Загрузка...</div>}
              {results.length > 0 && (
                <div className="preview__results">
                  <ul className="preview__results-list">
                    {results.map((result) => (
                      <li
                        key={`${result.type}-${result.id}`}
                        className="preview__results-item"
                      >
                        <Link href={`/${result.type}/${result.id}`}>
                          {result.full_name || result.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
