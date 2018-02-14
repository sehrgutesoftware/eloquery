
window.projectVersion = 'v0.1.0';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:SehrGut" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SehrGut.html">SehrGut</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:SehrGut_EloQuery" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SehrGut/EloQuery.html">EloQuery</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:SehrGut_EloQuery_Constraints" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SehrGut/EloQuery/Constraints.html">Constraints</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:SehrGut_EloQuery_Constraints_AbstractConstraint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/EloQuery/Constraints/AbstractConstraint.html">AbstractConstraint</a>                    </div>                </li>                            <li data-name="class:SehrGut_EloQuery_Constraints_BetweenConstraint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/EloQuery/Constraints/BetweenConstraint.html">BetweenConstraint</a>                    </div>                </li>                            <li data-name="class:SehrGut_EloQuery_Constraints_ContainsConstraint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/EloQuery/Constraints/ContainsConstraint.html">ContainsConstraint</a>                    </div>                </li>                            <li data-name="class:SehrGut_EloQuery_Constraints_EndsWithConstraint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/EloQuery/Constraints/EndsWithConstraint.html">EndsWithConstraint</a>                    </div>                </li>                            <li data-name="class:SehrGut_EloQuery_Constraints_EqualsConstraint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/EloQuery/Constraints/EqualsConstraint.html">EqualsConstraint</a>                    </div>                </li>                            <li data-name="class:SehrGut_EloQuery_Constraints_GreaterConstraint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/EloQuery/Constraints/GreaterConstraint.html">GreaterConstraint</a>                    </div>                </li>                            <li data-name="class:SehrGut_EloQuery_Constraints_GreaterEqualConstraint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/EloQuery/Constraints/GreaterEqualConstraint.html">GreaterEqualConstraint</a>                    </div>                </li>                            <li data-name="class:SehrGut_EloQuery_Constraints_InConstraint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/EloQuery/Constraints/InConstraint.html">InConstraint</a>                    </div>                </li>                            <li data-name="class:SehrGut_EloQuery_Constraints_LessConstraint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/EloQuery/Constraints/LessConstraint.html">LessConstraint</a>                    </div>                </li>                            <li data-name="class:SehrGut_EloQuery_Constraints_LessEqualConstraint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/EloQuery/Constraints/LessEqualConstraint.html">LessEqualConstraint</a>                    </div>                </li>                            <li data-name="class:SehrGut_EloQuery_Constraints_StartsWithConstraint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/EloQuery/Constraints/StartsWithConstraint.html">StartsWithConstraint</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:SehrGut_EloQuery_Contracts" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SehrGut/EloQuery/Contracts.html">Contracts</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:SehrGut_EloQuery_Contracts_Grammar" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/EloQuery/Contracts/Grammar.html">Grammar</a>                    </div>                </li>                            <li data-name="class:SehrGut_EloQuery_Contracts_Operation" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/EloQuery/Contracts/Operation.html">Operation</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:SehrGut_EloQuery_Grammar" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SehrGut/EloQuery/Grammar.html">Grammar</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:SehrGut_EloQuery_Grammar_FilterGrammar" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/EloQuery/Grammar/FilterGrammar.html">FilterGrammar</a>                    </div>                </li>                            <li data-name="class:SehrGut_EloQuery_Grammar_SortGrammar" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/EloQuery/Grammar/SortGrammar.html">SortGrammar</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:SehrGut_EloQuery_Operations" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SehrGut/EloQuery/Operations.html">Operations</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:SehrGut_EloQuery_Operations_Filter" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/EloQuery/Operations/Filter.html">Filter</a>                    </div>                </li>                            <li data-name="class:SehrGut_EloQuery_Operations_Paginate" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/EloQuery/Operations/Paginate.html">Paginate</a>                    </div>                </li>                            <li data-name="class:SehrGut_EloQuery_Operations_Sort" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/EloQuery/Operations/Sort.html">Sort</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:SehrGut_EloQuery_OperationCollection" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SehrGut/EloQuery/OperationCollection.html">OperationCollection</a>                    </div>                </li>                            <li data-name="class:SehrGut_EloQuery_Operators" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SehrGut/EloQuery/Operators.html">Operators</a>                    </div>                </li>                            <li data-name="class:SehrGut_EloQuery_RequestParser" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SehrGut/EloQuery/RequestParser.html">RequestParser</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "SehrGut.html", "name": "SehrGut", "doc": "Namespace SehrGut"},{"type": "Namespace", "link": "SehrGut/EloQuery.html", "name": "SehrGut\\EloQuery", "doc": "Namespace SehrGut\\EloQuery"},{"type": "Namespace", "link": "SehrGut/EloQuery/Constraints.html", "name": "SehrGut\\EloQuery\\Constraints", "doc": "Namespace SehrGut\\EloQuery\\Constraints"},{"type": "Namespace", "link": "SehrGut/EloQuery/Contracts.html", "name": "SehrGut\\EloQuery\\Contracts", "doc": "Namespace SehrGut\\EloQuery\\Contracts"},{"type": "Namespace", "link": "SehrGut/EloQuery/Grammar.html", "name": "SehrGut\\EloQuery\\Grammar", "doc": "Namespace SehrGut\\EloQuery\\Grammar"},{"type": "Namespace", "link": "SehrGut/EloQuery/Operations.html", "name": "SehrGut\\EloQuery\\Operations", "doc": "Namespace SehrGut\\EloQuery\\Operations"},
            {"type": "Interface", "fromName": "SehrGut\\EloQuery\\Contracts", "fromLink": "SehrGut/EloQuery/Contracts.html", "link": "SehrGut/EloQuery/Contracts/Grammar.html", "name": "SehrGut\\EloQuery\\Contracts\\Grammar", "doc": "&quot;Describes a \&quot;grammar\&quot; according to which we extract structured parameters from a request.&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\EloQuery\\Contracts\\Grammar", "fromLink": "SehrGut/EloQuery/Contracts/Grammar.html", "link": "SehrGut/EloQuery/Contracts/Grammar.html#method_extract", "name": "SehrGut\\EloQuery\\Contracts\\Grammar::extract", "doc": "&quot;Extract all options from the request.&quot;"},
            
            {"type": "Interface", "fromName": "SehrGut\\EloQuery\\Contracts", "fromLink": "SehrGut/EloQuery/Contracts.html", "link": "SehrGut/EloQuery/Contracts/Operation.html", "name": "SehrGut\\EloQuery\\Contracts\\Operation", "doc": "&quot;Describes an operation on a Query Builder, like eg. a filter constraint or sort order.&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\EloQuery\\Contracts\\Operation", "fromLink": "SehrGut/EloQuery/Contracts/Operation.html", "link": "SehrGut/EloQuery/Contracts/Operation.html#method_applyToBuilder", "name": "SehrGut\\EloQuery\\Contracts\\Operation::applyToBuilder", "doc": "&quot;Apply the operation to a query builder.&quot;"},
            
            
            {"type": "Class", "fromName": "SehrGut\\EloQuery\\Constraints", "fromLink": "SehrGut/EloQuery/Constraints.html", "link": "SehrGut/EloQuery/Constraints/AbstractConstraint.html", "name": "SehrGut\\EloQuery\\Constraints\\AbstractConstraint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\EloQuery\\Constraints\\AbstractConstraint", "fromLink": "SehrGut/EloQuery/Constraints/AbstractConstraint.html", "link": "SehrGut/EloQuery/Constraints/AbstractConstraint.html#method_getOperator", "name": "SehrGut\\EloQuery\\Constraints\\AbstractConstraint::getOperator", "doc": "&quot;Get the operator to feed into the builder method.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\Constraints\\AbstractConstraint", "fromLink": "SehrGut/EloQuery/Constraints/AbstractConstraint.html", "link": "SehrGut/EloQuery/Constraints/AbstractConstraint.html#method___construct", "name": "SehrGut\\EloQuery\\Constraints\\AbstractConstraint::__construct", "doc": "&quot;Construct a Constraint instance.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\Constraints\\AbstractConstraint", "fromLink": "SehrGut/EloQuery/Constraints/AbstractConstraint.html", "link": "SehrGut/EloQuery/Constraints/AbstractConstraint.html#method_applyToBuilder", "name": "SehrGut\\EloQuery\\Constraints\\AbstractConstraint::applyToBuilder", "doc": "&quot;Apply the operation to the query builder.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\Constraints\\AbstractConstraint", "fromLink": "SehrGut/EloQuery/Constraints/AbstractConstraint.html", "link": "SehrGut/EloQuery/Constraints/AbstractConstraint.html#method_getBuilderArguments", "name": "SehrGut\\EloQuery\\Constraints\\AbstractConstraint::getBuilderArguments", "doc": "&quot;Attributes to the builder method.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\Constraints\\AbstractConstraint", "fromLink": "SehrGut/EloQuery/Constraints/AbstractConstraint.html", "link": "SehrGut/EloQuery/Constraints/AbstractConstraint.html#method_getBuilderMethod", "name": "SehrGut\\EloQuery\\Constraints\\AbstractConstraint::getBuilderMethod", "doc": "&quot;The method to call on the builder.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\Constraints\\AbstractConstraint", "fromLink": "SehrGut/EloQuery/Constraints/AbstractConstraint.html", "link": "SehrGut/EloQuery/Constraints/AbstractConstraint.html#method_getPreparedValue", "name": "SehrGut\\EloQuery\\Constraints\\AbstractConstraint::getPreparedValue", "doc": "&quot;The value transformed to match the operation.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\EloQuery\\Constraints", "fromLink": "SehrGut/EloQuery/Constraints.html", "link": "SehrGut/EloQuery/Constraints/BetweenConstraint.html", "name": "SehrGut\\EloQuery\\Constraints\\BetweenConstraint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\EloQuery\\Constraints\\BetweenConstraint", "fromLink": "SehrGut/EloQuery/Constraints/BetweenConstraint.html", "link": "SehrGut/EloQuery/Constraints/BetweenConstraint.html#method_getOperator", "name": "SehrGut\\EloQuery\\Constraints\\BetweenConstraint::getOperator", "doc": "&quot;Get the operator to feed into the builder method.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\Constraints\\BetweenConstraint", "fromLink": "SehrGut/EloQuery/Constraints/BetweenConstraint.html", "link": "SehrGut/EloQuery/Constraints/BetweenConstraint.html#method_getBuilderMethod", "name": "SehrGut\\EloQuery\\Constraints\\BetweenConstraint::getBuilderMethod", "doc": "&quot;The method to call on the builder.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\EloQuery\\Constraints", "fromLink": "SehrGut/EloQuery/Constraints.html", "link": "SehrGut/EloQuery/Constraints/ContainsConstraint.html", "name": "SehrGut\\EloQuery\\Constraints\\ContainsConstraint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\EloQuery\\Constraints\\ContainsConstraint", "fromLink": "SehrGut/EloQuery/Constraints/ContainsConstraint.html", "link": "SehrGut/EloQuery/Constraints/ContainsConstraint.html#method_getOperator", "name": "SehrGut\\EloQuery\\Constraints\\ContainsConstraint::getOperator", "doc": "&quot;Get the operator to feed into the builder method.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\Constraints\\ContainsConstraint", "fromLink": "SehrGut/EloQuery/Constraints/ContainsConstraint.html", "link": "SehrGut/EloQuery/Constraints/ContainsConstraint.html#method_getPreparedValue", "name": "SehrGut\\EloQuery\\Constraints\\ContainsConstraint::getPreparedValue", "doc": "&quot;The value transformed to match the operation.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\EloQuery\\Constraints", "fromLink": "SehrGut/EloQuery/Constraints.html", "link": "SehrGut/EloQuery/Constraints/EndsWithConstraint.html", "name": "SehrGut\\EloQuery\\Constraints\\EndsWithConstraint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\EloQuery\\Constraints\\EndsWithConstraint", "fromLink": "SehrGut/EloQuery/Constraints/EndsWithConstraint.html", "link": "SehrGut/EloQuery/Constraints/EndsWithConstraint.html#method_getOperator", "name": "SehrGut\\EloQuery\\Constraints\\EndsWithConstraint::getOperator", "doc": "&quot;Get the operator to feed into the builder method.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\Constraints\\EndsWithConstraint", "fromLink": "SehrGut/EloQuery/Constraints/EndsWithConstraint.html", "link": "SehrGut/EloQuery/Constraints/EndsWithConstraint.html#method_getPreparedValue", "name": "SehrGut\\EloQuery\\Constraints\\EndsWithConstraint::getPreparedValue", "doc": "&quot;The value transformed to match the operation.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\EloQuery\\Constraints", "fromLink": "SehrGut/EloQuery/Constraints.html", "link": "SehrGut/EloQuery/Constraints/EqualsConstraint.html", "name": "SehrGut\\EloQuery\\Constraints\\EqualsConstraint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\EloQuery\\Constraints\\EqualsConstraint", "fromLink": "SehrGut/EloQuery/Constraints/EqualsConstraint.html", "link": "SehrGut/EloQuery/Constraints/EqualsConstraint.html#method_getOperator", "name": "SehrGut\\EloQuery\\Constraints\\EqualsConstraint::getOperator", "doc": "&quot;Get the operator to feed into the builder method.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\EloQuery\\Constraints", "fromLink": "SehrGut/EloQuery/Constraints.html", "link": "SehrGut/EloQuery/Constraints/GreaterConstraint.html", "name": "SehrGut\\EloQuery\\Constraints\\GreaterConstraint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\EloQuery\\Constraints\\GreaterConstraint", "fromLink": "SehrGut/EloQuery/Constraints/GreaterConstraint.html", "link": "SehrGut/EloQuery/Constraints/GreaterConstraint.html#method_getOperator", "name": "SehrGut\\EloQuery\\Constraints\\GreaterConstraint::getOperator", "doc": "&quot;Get the operator to feed into the builder method.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\EloQuery\\Constraints", "fromLink": "SehrGut/EloQuery/Constraints.html", "link": "SehrGut/EloQuery/Constraints/GreaterEqualConstraint.html", "name": "SehrGut\\EloQuery\\Constraints\\GreaterEqualConstraint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\EloQuery\\Constraints\\GreaterEqualConstraint", "fromLink": "SehrGut/EloQuery/Constraints/GreaterEqualConstraint.html", "link": "SehrGut/EloQuery/Constraints/GreaterEqualConstraint.html#method_getOperator", "name": "SehrGut\\EloQuery\\Constraints\\GreaterEqualConstraint::getOperator", "doc": "&quot;Get the operator to feed into the builder method.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\EloQuery\\Constraints", "fromLink": "SehrGut/EloQuery/Constraints.html", "link": "SehrGut/EloQuery/Constraints/InConstraint.html", "name": "SehrGut\\EloQuery\\Constraints\\InConstraint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\EloQuery\\Constraints\\InConstraint", "fromLink": "SehrGut/EloQuery/Constraints/InConstraint.html", "link": "SehrGut/EloQuery/Constraints/InConstraint.html#method_getOperator", "name": "SehrGut\\EloQuery\\Constraints\\InConstraint::getOperator", "doc": "&quot;Get the operator to feed into the builder method.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\Constraints\\InConstraint", "fromLink": "SehrGut/EloQuery/Constraints/InConstraint.html", "link": "SehrGut/EloQuery/Constraints/InConstraint.html#method_getBuilderMethod", "name": "SehrGut\\EloQuery\\Constraints\\InConstraint::getBuilderMethod", "doc": "&quot;The method to call on the builder.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\EloQuery\\Constraints", "fromLink": "SehrGut/EloQuery/Constraints.html", "link": "SehrGut/EloQuery/Constraints/LessConstraint.html", "name": "SehrGut\\EloQuery\\Constraints\\LessConstraint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\EloQuery\\Constraints\\LessConstraint", "fromLink": "SehrGut/EloQuery/Constraints/LessConstraint.html", "link": "SehrGut/EloQuery/Constraints/LessConstraint.html#method_getOperator", "name": "SehrGut\\EloQuery\\Constraints\\LessConstraint::getOperator", "doc": "&quot;Get the operator to feed into the builder method.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\EloQuery\\Constraints", "fromLink": "SehrGut/EloQuery/Constraints.html", "link": "SehrGut/EloQuery/Constraints/LessEqualConstraint.html", "name": "SehrGut\\EloQuery\\Constraints\\LessEqualConstraint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\EloQuery\\Constraints\\LessEqualConstraint", "fromLink": "SehrGut/EloQuery/Constraints/LessEqualConstraint.html", "link": "SehrGut/EloQuery/Constraints/LessEqualConstraint.html#method_getOperator", "name": "SehrGut\\EloQuery\\Constraints\\LessEqualConstraint::getOperator", "doc": "&quot;Get the operator to feed into the builder method.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\EloQuery\\Constraints", "fromLink": "SehrGut/EloQuery/Constraints.html", "link": "SehrGut/EloQuery/Constraints/StartsWithConstraint.html", "name": "SehrGut\\EloQuery\\Constraints\\StartsWithConstraint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\EloQuery\\Constraints\\StartsWithConstraint", "fromLink": "SehrGut/EloQuery/Constraints/StartsWithConstraint.html", "link": "SehrGut/EloQuery/Constraints/StartsWithConstraint.html#method_getOperator", "name": "SehrGut\\EloQuery\\Constraints\\StartsWithConstraint::getOperator", "doc": "&quot;Get the operator to feed into the builder method.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\Constraints\\StartsWithConstraint", "fromLink": "SehrGut/EloQuery/Constraints/StartsWithConstraint.html", "link": "SehrGut/EloQuery/Constraints/StartsWithConstraint.html#method_getPreparedValue", "name": "SehrGut\\EloQuery\\Constraints\\StartsWithConstraint::getPreparedValue", "doc": "&quot;The value transformed to match the operation.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\EloQuery\\Contracts", "fromLink": "SehrGut/EloQuery/Contracts.html", "link": "SehrGut/EloQuery/Contracts/Grammar.html", "name": "SehrGut\\EloQuery\\Contracts\\Grammar", "doc": "&quot;Describes a \&quot;grammar\&quot; according to which we extract structured parameters from a request.&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\EloQuery\\Contracts\\Grammar", "fromLink": "SehrGut/EloQuery/Contracts/Grammar.html", "link": "SehrGut/EloQuery/Contracts/Grammar.html#method_extract", "name": "SehrGut\\EloQuery\\Contracts\\Grammar::extract", "doc": "&quot;Extract all options from the request.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\EloQuery\\Contracts", "fromLink": "SehrGut/EloQuery/Contracts.html", "link": "SehrGut/EloQuery/Contracts/Operation.html", "name": "SehrGut\\EloQuery\\Contracts\\Operation", "doc": "&quot;Describes an operation on a Query Builder, like eg. a filter constraint or sort order.&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\EloQuery\\Contracts\\Operation", "fromLink": "SehrGut/EloQuery/Contracts/Operation.html", "link": "SehrGut/EloQuery/Contracts/Operation.html#method_applyToBuilder", "name": "SehrGut\\EloQuery\\Contracts\\Operation::applyToBuilder", "doc": "&quot;Apply the operation to a query builder.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\EloQuery\\Grammar", "fromLink": "SehrGut/EloQuery/Grammar.html", "link": "SehrGut/EloQuery/Grammar/FilterGrammar.html", "name": "SehrGut\\EloQuery\\Grammar\\FilterGrammar", "doc": "&quot;Rules for extracting filter constraints from a Request.&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\EloQuery\\Grammar\\FilterGrammar", "fromLink": "SehrGut/EloQuery/Grammar/FilterGrammar.html", "link": "SehrGut/EloQuery/Grammar/FilterGrammar.html#method_extract", "name": "SehrGut\\EloQuery\\Grammar\\FilterGrammar::extract", "doc": "&quot;Extract an array of filter options from the request.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\Grammar\\FilterGrammar", "fromLink": "SehrGut/EloQuery/Grammar/FilterGrammar.html", "link": "SehrGut/EloQuery/Grammar/FilterGrammar.html#method_validate", "name": "SehrGut\\EloQuery\\Grammar\\FilterGrammar::validate", "doc": "&quot;Validate the extacted array.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\Grammar\\FilterGrammar", "fromLink": "SehrGut/EloQuery/Grammar/FilterGrammar.html", "link": "SehrGut/EloQuery/Grammar/FilterGrammar.html#method_fillWithDefaults", "name": "SehrGut\\EloQuery\\Grammar\\FilterGrammar::fillWithDefaults", "doc": "&quot;Replace missing values with their defaults.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\EloQuery\\Grammar", "fromLink": "SehrGut/EloQuery/Grammar.html", "link": "SehrGut/EloQuery/Grammar/SortGrammar.html", "name": "SehrGut\\EloQuery\\Grammar\\SortGrammar", "doc": "&quot;Rules for extracting sort orders from a Request.&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\EloQuery\\Grammar\\SortGrammar", "fromLink": "SehrGut/EloQuery/Grammar/SortGrammar.html", "link": "SehrGut/EloQuery/Grammar/SortGrammar.html#method_extract", "name": "SehrGut\\EloQuery\\Grammar\\SortGrammar::extract", "doc": "&quot;Extract an array of sort options from the request.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\Grammar\\SortGrammar", "fromLink": "SehrGut/EloQuery/Grammar/SortGrammar.html", "link": "SehrGut/EloQuery/Grammar/SortGrammar.html#method_validate", "name": "SehrGut\\EloQuery\\Grammar\\SortGrammar::validate", "doc": "&quot;Validate the extacted array.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\Grammar\\SortGrammar", "fromLink": "SehrGut/EloQuery/Grammar/SortGrammar.html", "link": "SehrGut/EloQuery/Grammar/SortGrammar.html#method_fillWithDefaults", "name": "SehrGut\\EloQuery\\Grammar\\SortGrammar::fillWithDefaults", "doc": "&quot;Replace missing values with their defaults.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\EloQuery", "fromLink": "SehrGut/EloQuery.html", "link": "SehrGut/EloQuery/OperationCollection.html", "name": "SehrGut\\EloQuery\\OperationCollection", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\EloQuery\\OperationCollection", "fromLink": "SehrGut/EloQuery/OperationCollection.html", "link": "SehrGut/EloQuery/OperationCollection.html#method___construct", "name": "SehrGut\\EloQuery\\OperationCollection::__construct", "doc": "&quot;Construct a OperationCollection instance.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\OperationCollection", "fromLink": "SehrGut/EloQuery/OperationCollection.html", "link": "SehrGut/EloQuery/OperationCollection.html#method_add", "name": "SehrGut\\EloQuery\\OperationCollection::add", "doc": "&quot;Add one or more operations to the collection.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\OperationCollection", "fromLink": "SehrGut/EloQuery/OperationCollection.html", "link": "SehrGut/EloQuery/OperationCollection.html#method_merge", "name": "SehrGut\\EloQuery\\OperationCollection::merge", "doc": "&quot;Merge another OperationCollection into this one.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\OperationCollection", "fromLink": "SehrGut/EloQuery/OperationCollection.html", "link": "SehrGut/EloQuery/OperationCollection.html#method_dump", "name": "SehrGut\\EloQuery\\OperationCollection::dump", "doc": "&quot;Return all contained operations.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\OperationCollection", "fromLink": "SehrGut/EloQuery/OperationCollection.html", "link": "SehrGut/EloQuery/OperationCollection.html#method_applyToBuilder", "name": "SehrGut\\EloQuery\\OperationCollection::applyToBuilder", "doc": "&quot;Apply all operations in the collection to the builder.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\OperationCollection", "fromLink": "SehrGut/EloQuery/OperationCollection.html", "link": "SehrGut/EloQuery/OperationCollection.html#method_append", "name": "SehrGut\\EloQuery\\OperationCollection::append", "doc": "&quot;Add an operation to the collection.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\EloQuery\\Operations", "fromLink": "SehrGut/EloQuery/Operations.html", "link": "SehrGut/EloQuery/Operations/Filter.html", "name": "SehrGut\\EloQuery\\Operations\\Filter", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\EloQuery\\Operations\\Filter", "fromLink": "SehrGut/EloQuery/Operations/Filter.html", "link": "SehrGut/EloQuery/Operations/Filter.html#method___construct", "name": "SehrGut\\EloQuery\\Operations\\Filter::__construct", "doc": "&quot;Construct a Filter instance.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\Operations\\Filter", "fromLink": "SehrGut/EloQuery/Operations/Filter.html", "link": "SehrGut/EloQuery/Operations/Filter.html#method_applyToBuilder", "name": "SehrGut\\EloQuery\\Operations\\Filter::applyToBuilder", "doc": "&quot;Apply the filter to a query builder.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\Operations\\Filter", "fromLink": "SehrGut/EloQuery/Operations/Filter.html", "link": "SehrGut/EloQuery/Operations/Filter.html#method_apply", "name": "SehrGut\\EloQuery\\Operations\\Filter::apply", "doc": "&quot;Apply the filter to a query builder (not checking for relationship).&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\Operations\\Filter", "fromLink": "SehrGut/EloQuery/Operations/Filter.html", "link": "SehrGut/EloQuery/Operations/Filter.html#method_actsOnRelation", "name": "SehrGut\\EloQuery\\Operations\\Filter::actsOnRelation", "doc": "&quot;Determine if the filter acts on a relation (as opposed to the model we&#039;re querying for).&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\Operations\\Filter", "fromLink": "SehrGut/EloQuery/Operations/Filter.html", "link": "SehrGut/EloQuery/Operations/Filter.html#method_getRelation", "name": "SehrGut\\EloQuery\\Operations\\Filter::getRelation", "doc": "&quot;Get the relation on which to apply this filter.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\Operations\\Filter", "fromLink": "SehrGut/EloQuery/Operations/Filter.html", "link": "SehrGut/EloQuery/Operations/Filter.html#method_getBareAttribute", "name": "SehrGut\\EloQuery\\Operations\\Filter::getBareAttribute", "doc": "&quot;Get the attribute that this filter compares without relationship prefix.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\Operations\\Filter", "fromLink": "SehrGut/EloQuery/Operations/Filter.html", "link": "SehrGut/EloQuery/Operations/Filter.html#method_getOperation", "name": "SehrGut\\EloQuery\\Operations\\Filter::getOperation", "doc": "&quot;Get an Operation instance for the current filter.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\EloQuery\\Operations", "fromLink": "SehrGut/EloQuery/Operations.html", "link": "SehrGut/EloQuery/Operations/Paginate.html", "name": "SehrGut\\EloQuery\\Operations\\Paginate", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\EloQuery\\Operations\\Paginate", "fromLink": "SehrGut/EloQuery/Operations/Paginate.html", "link": "SehrGut/EloQuery/Operations/Paginate.html#method___construct", "name": "SehrGut\\EloQuery\\Operations\\Paginate::__construct", "doc": "&quot;Construct a Paginate instance.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\Operations\\Paginate", "fromLink": "SehrGut/EloQuery/Operations/Paginate.html", "link": "SehrGut/EloQuery/Operations/Paginate.html#method_applyToBuilder", "name": "SehrGut\\EloQuery\\Operations\\Paginate::applyToBuilder", "doc": "&quot;Apply the pagination constraints to a query builder.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\EloQuery\\Operations", "fromLink": "SehrGut/EloQuery/Operations.html", "link": "SehrGut/EloQuery/Operations/Sort.html", "name": "SehrGut\\EloQuery\\Operations\\Sort", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\EloQuery\\Operations\\Sort", "fromLink": "SehrGut/EloQuery/Operations/Sort.html", "link": "SehrGut/EloQuery/Operations/Sort.html#method___construct", "name": "SehrGut\\EloQuery\\Operations\\Sort::__construct", "doc": "&quot;Construct a Sort instance.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\Operations\\Sort", "fromLink": "SehrGut/EloQuery/Operations/Sort.html", "link": "SehrGut/EloQuery/Operations/Sort.html#method_applyToBuilder", "name": "SehrGut\\EloQuery\\Operations\\Sort::applyToBuilder", "doc": "&quot;Apply the sort order to a query builder.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\EloQuery", "fromLink": "SehrGut/EloQuery.html", "link": "SehrGut/EloQuery/Operators.html", "name": "SehrGut\\EloQuery\\Operators", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\EloQuery\\Operators", "fromLink": "SehrGut/EloQuery/Operators.html", "link": "SehrGut/EloQuery/Operators.html#method_all", "name": "SehrGut\\EloQuery\\Operators::all", "doc": "&quot;Retrieve all possible operations.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\Operators", "fromLink": "SehrGut/EloQuery/Operators.html", "link": "SehrGut/EloQuery/Operators.html#method_exists", "name": "SehrGut\\EloQuery\\Operators::exists", "doc": "&quot;Check if given operation exists \/ is defined.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\EloQuery", "fromLink": "SehrGut/EloQuery.html", "link": "SehrGut/EloQuery/RequestParser.html", "name": "SehrGut\\EloQuery\\RequestParser", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\EloQuery\\RequestParser", "fromLink": "SehrGut/EloQuery/RequestParser.html", "link": "SehrGut/EloQuery/RequestParser.html#method___construct", "name": "SehrGut\\EloQuery\\RequestParser::__construct", "doc": "&quot;Construct a RequestParser instance.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\RequestParser", "fromLink": "SehrGut/EloQuery/RequestParser.html", "link": "SehrGut/EloQuery/RequestParser.html#method_extractOperations", "name": "SehrGut\\EloQuery\\RequestParser::extractOperations", "doc": "&quot;Extract all query Operations from the request.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\RequestParser", "fromLink": "SehrGut/EloQuery/RequestParser.html", "link": "SehrGut/EloQuery/RequestParser.html#method_extractFilter", "name": "SehrGut\\EloQuery\\RequestParser::extractFilter", "doc": "&quot;Extract filter constraints from the request.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\RequestParser", "fromLink": "SehrGut/EloQuery/RequestParser.html", "link": "SehrGut/EloQuery/RequestParser.html#method_extractSort", "name": "SehrGut\\EloQuery\\RequestParser::extractSort", "doc": "&quot;Extract sort orders from the request.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\RequestParser", "fromLink": "SehrGut/EloQuery/RequestParser.html", "link": "SehrGut/EloQuery/RequestParser.html#method_getOperationsForComponent", "name": "SehrGut\\EloQuery\\RequestParser::getOperationsForComponent", "doc": "&quot;Extract all operations for a given component.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\RequestParser", "fromLink": "SehrGut/EloQuery/RequestParser.html", "link": "SehrGut/EloQuery/RequestParser.html#method_getNameOfExtractMethod", "name": "SehrGut\\EloQuery\\RequestParser::getNameOfExtractMethod", "doc": "&quot;Build the extract method name for given component.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\EloQuery\\RequestParser", "fromLink": "SehrGut/EloQuery/RequestParser.html", "link": "SehrGut/EloQuery/RequestParser.html#method_getGrammarForOperation", "name": "SehrGut\\EloQuery\\RequestParser::getGrammarForOperation", "doc": "&quot;Get the appropriate grammar for given operation.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


