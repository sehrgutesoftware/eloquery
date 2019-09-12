
window.projectVersion = 'v0.5.1';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:SehrGut" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SehrGut.html">SehrGut</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:SehrGut_Eloquery" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SehrGut/Eloquery.html">Eloquery</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:SehrGut_Eloquery_Constraints" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SehrGut/Eloquery/Constraints.html">Constraints</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:SehrGut_Eloquery_Constraints_AbstractConstraint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Constraints/AbstractConstraint.html">AbstractConstraint</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Constraints_BetweenConstraint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Constraints/BetweenConstraint.html">BetweenConstraint</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Constraints_ContainsConstraint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Constraints/ContainsConstraint.html">ContainsConstraint</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Constraints_EndsWithConstraint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Constraints/EndsWithConstraint.html">EndsWithConstraint</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Constraints_EqualsConstraint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Constraints/EqualsConstraint.html">EqualsConstraint</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Constraints_GreaterConstraint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Constraints/GreaterConstraint.html">GreaterConstraint</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Constraints_GreaterEqualConstraint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Constraints/GreaterEqualConstraint.html">GreaterEqualConstraint</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Constraints_InConstraint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Constraints/InConstraint.html">InConstraint</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Constraints_LessConstraint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Constraints/LessConstraint.html">LessConstraint</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Constraints_LessEqualConstraint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Constraints/LessEqualConstraint.html">LessEqualConstraint</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Constraints_StartsWithConstraint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Constraints/StartsWithConstraint.html">StartsWithConstraint</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:SehrGut_Eloquery_Contracts" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SehrGut/Eloquery/Contracts.html">Contracts</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:SehrGut_Eloquery_Contracts_Extractor" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Contracts/Extractor.html">Extractor</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Contracts_Grammar" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Contracts/Grammar.html">Grammar</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Contracts_Operation" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Contracts/Operation.html">Operation</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Contracts_Parser" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Contracts/Parser.html">Parser</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:SehrGut_Eloquery_Extractors" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SehrGut/Eloquery/Extractors.html">Extractors</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:SehrGut_Eloquery_Extractors_AbstractExtractor" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Extractors/AbstractExtractor.html">AbstractExtractor</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Extractors_FilterExtractor" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Extractors/FilterExtractor.html">FilterExtractor</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Extractors_PaginateExtractor" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Extractors/PaginateExtractor.html">PaginateExtractor</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Extractors_SideloadExtractor" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Extractors/SideloadExtractor.html">SideloadExtractor</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Extractors_SortExtractor" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Extractors/SortExtractor.html">SortExtractor</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:SehrGut_Eloquery_Facades" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SehrGut/Eloquery/Facades.html">Facades</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:SehrGut_Eloquery_Facades_Eloquery" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Facades/Eloquery.html">Eloquery</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:SehrGut_Eloquery_Grammar" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SehrGut/Eloquery/Grammar.html">Grammar</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:SehrGut_Eloquery_Grammar_AbstractGrammar" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Grammar/AbstractGrammar.html">AbstractGrammar</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Grammar_FilterGrammar" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Grammar/FilterGrammar.html">FilterGrammar</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Grammar_PaginateGrammar" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Grammar/PaginateGrammar.html">PaginateGrammar</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Grammar_SideloadGrammar" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Grammar/SideloadGrammar.html">SideloadGrammar</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Grammar_SortGrammar" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Grammar/SortGrammar.html">SortGrammar</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:SehrGut_Eloquery_Operations" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SehrGut/Eloquery/Operations.html">Operations</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:SehrGut_Eloquery_Operations_Filter" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Operations/Filter.html">Filter</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Operations_Paginate" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Operations/Paginate.html">Paginate</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Operations_Sideload" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Operations/Sideload.html">Sideload</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Operations_Sort" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Operations/Sort.html">Sort</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:SehrGut_Eloquery_Providers" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SehrGut/Eloquery/Providers.html">Providers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:SehrGut_Eloquery_Providers_EloqueryServiceProvider" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="SehrGut/Eloquery/Providers/EloqueryServiceProvider.html">EloqueryServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:SehrGut_Eloquery_Eloquery" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SehrGut/Eloquery/Eloquery.html">Eloquery</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_OperationCollection" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SehrGut/Eloquery/OperationCollection.html">OperationCollection</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_OperationResult" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SehrGut/Eloquery/OperationResult.html">OperationResult</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_Operators" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SehrGut/Eloquery/Operators.html">Operators</a>                    </div>                </li>                            <li data-name="class:SehrGut_Eloquery_RequestParser" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SehrGut/Eloquery/RequestParser.html">RequestParser</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "SehrGut.html", "name": "SehrGut", "doc": "Namespace SehrGut"},{"type": "Namespace", "link": "SehrGut/Eloquery.html", "name": "SehrGut\\Eloquery", "doc": "Namespace SehrGut\\Eloquery"},{"type": "Namespace", "link": "SehrGut/Eloquery/Constraints.html", "name": "SehrGut\\Eloquery\\Constraints", "doc": "Namespace SehrGut\\Eloquery\\Constraints"},{"type": "Namespace", "link": "SehrGut/Eloquery/Contracts.html", "name": "SehrGut\\Eloquery\\Contracts", "doc": "Namespace SehrGut\\Eloquery\\Contracts"},{"type": "Namespace", "link": "SehrGut/Eloquery/Extractors.html", "name": "SehrGut\\Eloquery\\Extractors", "doc": "Namespace SehrGut\\Eloquery\\Extractors"},{"type": "Namespace", "link": "SehrGut/Eloquery/Facades.html", "name": "SehrGut\\Eloquery\\Facades", "doc": "Namespace SehrGut\\Eloquery\\Facades"},{"type": "Namespace", "link": "SehrGut/Eloquery/Grammar.html", "name": "SehrGut\\Eloquery\\Grammar", "doc": "Namespace SehrGut\\Eloquery\\Grammar"},{"type": "Namespace", "link": "SehrGut/Eloquery/Operations.html", "name": "SehrGut\\Eloquery\\Operations", "doc": "Namespace SehrGut\\Eloquery\\Operations"},{"type": "Namespace", "link": "SehrGut/Eloquery/Providers.html", "name": "SehrGut\\Eloquery\\Providers", "doc": "Namespace SehrGut\\Eloquery\\Providers"},
            {"type": "Interface", "fromName": "SehrGut\\Eloquery\\Contracts", "fromLink": "SehrGut/Eloquery/Contracts.html", "link": "SehrGut/Eloquery/Contracts/Extractor.html", "name": "SehrGut\\Eloquery\\Contracts\\Extractor", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Contracts\\Extractor", "fromLink": "SehrGut/Eloquery/Contracts/Extractor.html", "link": "SehrGut/Eloquery/Contracts/Extractor.html#method___construct", "name": "SehrGut\\Eloquery\\Contracts\\Extractor::__construct", "doc": "&quot;Construct an Extractor instance.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Contracts\\Extractor", "fromLink": "SehrGut/Eloquery/Contracts/Extractor.html", "link": "SehrGut/Eloquery/Contracts/Extractor.html#method_extract", "name": "SehrGut\\Eloquery\\Contracts\\Extractor::extract", "doc": "&quot;Extract operations from the request.&quot;"},
            
            {"type": "Interface", "fromName": "SehrGut\\Eloquery\\Contracts", "fromLink": "SehrGut/Eloquery/Contracts.html", "link": "SehrGut/Eloquery/Contracts/Grammar.html", "name": "SehrGut\\Eloquery\\Contracts\\Grammar", "doc": "&quot;Describes a \&quot;grammar\&quot; according to which we extract structured parameters from a request.&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Contracts\\Grammar", "fromLink": "SehrGut/Eloquery/Contracts/Grammar.html", "link": "SehrGut/Eloquery/Contracts/Grammar.html#method___construct", "name": "SehrGut\\Eloquery\\Contracts\\Grammar::__construct", "doc": "&quot;Construct a new Grammar instance.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Contracts\\Grammar", "fromLink": "SehrGut/Eloquery/Contracts/Grammar.html", "link": "SehrGut/Eloquery/Contracts/Grammar.html#method_extract", "name": "SehrGut\\Eloquery\\Contracts\\Grammar::extract", "doc": "&quot;Extract all options from the request.&quot;"},
            
            {"type": "Interface", "fromName": "SehrGut\\Eloquery\\Contracts", "fromLink": "SehrGut/Eloquery/Contracts.html", "link": "SehrGut/Eloquery/Contracts/Operation.html", "name": "SehrGut\\Eloquery\\Contracts\\Operation", "doc": "&quot;Describes an operation on a Query Builder, eg. a filter constraint or sort order.&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Contracts\\Operation", "fromLink": "SehrGut/Eloquery/Contracts/Operation.html", "link": "SehrGut/Eloquery/Contracts/Operation.html#method_applyToBuilder", "name": "SehrGut\\Eloquery\\Contracts\\Operation::applyToBuilder", "doc": "&quot;Apply the operation to a query builder.&quot;"},
            
            {"type": "Interface", "fromName": "SehrGut\\Eloquery\\Contracts", "fromLink": "SehrGut/Eloquery/Contracts.html", "link": "SehrGut/Eloquery/Contracts/Parser.html", "name": "SehrGut\\Eloquery\\Contracts\\Parser", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Contracts\\Parser", "fromLink": "SehrGut/Eloquery/Contracts/Parser.html", "link": "SehrGut/Eloquery/Contracts/Parser.html#method___construct", "name": "SehrGut\\Eloquery\\Contracts\\Parser::__construct", "doc": "&quot;Construct a Parser instance.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Contracts\\Parser", "fromLink": "SehrGut/Eloquery/Contracts/Parser.html", "link": "SehrGut/Eloquery/Contracts/Parser.html#method_getConfig", "name": "SehrGut\\Eloquery\\Contracts\\Parser::getConfig", "doc": "&quot;Retrieve the configuration variables of the parser.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Contracts\\Parser", "fromLink": "SehrGut/Eloquery/Contracts/Parser.html", "link": "SehrGut/Eloquery/Contracts/Parser.html#method_setConfig", "name": "SehrGut\\Eloquery\\Contracts\\Parser::setConfig", "doc": "&quot;Set config value on the parser.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Contracts\\Parser", "fromLink": "SehrGut/Eloquery/Contracts/Parser.html", "link": "SehrGut/Eloquery/Contracts/Parser.html#method_setRequest", "name": "SehrGut\\Eloquery\\Contracts\\Parser::setRequest", "doc": "&quot;Override the request.&quot;"},
            
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Constraints", "fromLink": "SehrGut/Eloquery/Constraints.html", "link": "SehrGut/Eloquery/Constraints/AbstractConstraint.html", "name": "SehrGut\\Eloquery\\Constraints\\AbstractConstraint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Constraints\\AbstractConstraint", "fromLink": "SehrGut/Eloquery/Constraints/AbstractConstraint.html", "link": "SehrGut/Eloquery/Constraints/AbstractConstraint.html#method_getOperator", "name": "SehrGut\\Eloquery\\Constraints\\AbstractConstraint::getOperator", "doc": "&quot;Get the operator to feed into the builder method.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Constraints\\AbstractConstraint", "fromLink": "SehrGut/Eloquery/Constraints/AbstractConstraint.html", "link": "SehrGut/Eloquery/Constraints/AbstractConstraint.html#method___construct", "name": "SehrGut\\Eloquery\\Constraints\\AbstractConstraint::__construct", "doc": "&quot;Construct a Constraint instance.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Constraints\\AbstractConstraint", "fromLink": "SehrGut/Eloquery/Constraints/AbstractConstraint.html", "link": "SehrGut/Eloquery/Constraints/AbstractConstraint.html#method_applyToBuilder", "name": "SehrGut\\Eloquery\\Constraints\\AbstractConstraint::applyToBuilder", "doc": "&quot;Apply the operation to the query builder.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Constraints\\AbstractConstraint", "fromLink": "SehrGut/Eloquery/Constraints/AbstractConstraint.html", "link": "SehrGut/Eloquery/Constraints/AbstractConstraint.html#method_getBuilderArguments", "name": "SehrGut\\Eloquery\\Constraints\\AbstractConstraint::getBuilderArguments", "doc": "&quot;Attributes to the builder method.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Constraints\\AbstractConstraint", "fromLink": "SehrGut/Eloquery/Constraints/AbstractConstraint.html", "link": "SehrGut/Eloquery/Constraints/AbstractConstraint.html#method_getBuilderMethod", "name": "SehrGut\\Eloquery\\Constraints\\AbstractConstraint::getBuilderMethod", "doc": "&quot;The method to call on the builder.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Constraints\\AbstractConstraint", "fromLink": "SehrGut/Eloquery/Constraints/AbstractConstraint.html", "link": "SehrGut/Eloquery/Constraints/AbstractConstraint.html#method_getPreparedValue", "name": "SehrGut\\Eloquery\\Constraints\\AbstractConstraint::getPreparedValue", "doc": "&quot;The value transformed to match the operation.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Constraints", "fromLink": "SehrGut/Eloquery/Constraints.html", "link": "SehrGut/Eloquery/Constraints/BetweenConstraint.html", "name": "SehrGut\\Eloquery\\Constraints\\BetweenConstraint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Constraints\\BetweenConstraint", "fromLink": "SehrGut/Eloquery/Constraints/BetweenConstraint.html", "link": "SehrGut/Eloquery/Constraints/BetweenConstraint.html#method_getOperator", "name": "SehrGut\\Eloquery\\Constraints\\BetweenConstraint::getOperator", "doc": "&quot;Get the operator to feed into the builder method.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Constraints\\BetweenConstraint", "fromLink": "SehrGut/Eloquery/Constraints/BetweenConstraint.html", "link": "SehrGut/Eloquery/Constraints/BetweenConstraint.html#method_getBuilderMethod", "name": "SehrGut\\Eloquery\\Constraints\\BetweenConstraint::getBuilderMethod", "doc": "&quot;The method to call on the builder.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Constraints", "fromLink": "SehrGut/Eloquery/Constraints.html", "link": "SehrGut/Eloquery/Constraints/ContainsConstraint.html", "name": "SehrGut\\Eloquery\\Constraints\\ContainsConstraint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Constraints\\ContainsConstraint", "fromLink": "SehrGut/Eloquery/Constraints/ContainsConstraint.html", "link": "SehrGut/Eloquery/Constraints/ContainsConstraint.html#method_getOperator", "name": "SehrGut\\Eloquery\\Constraints\\ContainsConstraint::getOperator", "doc": "&quot;Get the operator to feed into the builder method.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Constraints\\ContainsConstraint", "fromLink": "SehrGut/Eloquery/Constraints/ContainsConstraint.html", "link": "SehrGut/Eloquery/Constraints/ContainsConstraint.html#method_getPreparedValue", "name": "SehrGut\\Eloquery\\Constraints\\ContainsConstraint::getPreparedValue", "doc": "&quot;The value transformed to match the operation.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Constraints", "fromLink": "SehrGut/Eloquery/Constraints.html", "link": "SehrGut/Eloquery/Constraints/EndsWithConstraint.html", "name": "SehrGut\\Eloquery\\Constraints\\EndsWithConstraint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Constraints\\EndsWithConstraint", "fromLink": "SehrGut/Eloquery/Constraints/EndsWithConstraint.html", "link": "SehrGut/Eloquery/Constraints/EndsWithConstraint.html#method_getOperator", "name": "SehrGut\\Eloquery\\Constraints\\EndsWithConstraint::getOperator", "doc": "&quot;Get the operator to feed into the builder method.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Constraints\\EndsWithConstraint", "fromLink": "SehrGut/Eloquery/Constraints/EndsWithConstraint.html", "link": "SehrGut/Eloquery/Constraints/EndsWithConstraint.html#method_getPreparedValue", "name": "SehrGut\\Eloquery\\Constraints\\EndsWithConstraint::getPreparedValue", "doc": "&quot;The value transformed to match the operation.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Constraints", "fromLink": "SehrGut/Eloquery/Constraints.html", "link": "SehrGut/Eloquery/Constraints/EqualsConstraint.html", "name": "SehrGut\\Eloquery\\Constraints\\EqualsConstraint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Constraints\\EqualsConstraint", "fromLink": "SehrGut/Eloquery/Constraints/EqualsConstraint.html", "link": "SehrGut/Eloquery/Constraints/EqualsConstraint.html#method_getOperator", "name": "SehrGut\\Eloquery\\Constraints\\EqualsConstraint::getOperator", "doc": "&quot;Get the operator to feed into the builder method.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Constraints", "fromLink": "SehrGut/Eloquery/Constraints.html", "link": "SehrGut/Eloquery/Constraints/GreaterConstraint.html", "name": "SehrGut\\Eloquery\\Constraints\\GreaterConstraint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Constraints\\GreaterConstraint", "fromLink": "SehrGut/Eloquery/Constraints/GreaterConstraint.html", "link": "SehrGut/Eloquery/Constraints/GreaterConstraint.html#method_getOperator", "name": "SehrGut\\Eloquery\\Constraints\\GreaterConstraint::getOperator", "doc": "&quot;Get the operator to feed into the builder method.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Constraints", "fromLink": "SehrGut/Eloquery/Constraints.html", "link": "SehrGut/Eloquery/Constraints/GreaterEqualConstraint.html", "name": "SehrGut\\Eloquery\\Constraints\\GreaterEqualConstraint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Constraints\\GreaterEqualConstraint", "fromLink": "SehrGut/Eloquery/Constraints/GreaterEqualConstraint.html", "link": "SehrGut/Eloquery/Constraints/GreaterEqualConstraint.html#method_getOperator", "name": "SehrGut\\Eloquery\\Constraints\\GreaterEqualConstraint::getOperator", "doc": "&quot;Get the operator to feed into the builder method.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Constraints", "fromLink": "SehrGut/Eloquery/Constraints.html", "link": "SehrGut/Eloquery/Constraints/InConstraint.html", "name": "SehrGut\\Eloquery\\Constraints\\InConstraint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Constraints\\InConstraint", "fromLink": "SehrGut/Eloquery/Constraints/InConstraint.html", "link": "SehrGut/Eloquery/Constraints/InConstraint.html#method_getOperator", "name": "SehrGut\\Eloquery\\Constraints\\InConstraint::getOperator", "doc": "&quot;Get the operator to feed into the builder method.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Constraints\\InConstraint", "fromLink": "SehrGut/Eloquery/Constraints/InConstraint.html", "link": "SehrGut/Eloquery/Constraints/InConstraint.html#method_getBuilderMethod", "name": "SehrGut\\Eloquery\\Constraints\\InConstraint::getBuilderMethod", "doc": "&quot;The method to call on the builder.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Constraints", "fromLink": "SehrGut/Eloquery/Constraints.html", "link": "SehrGut/Eloquery/Constraints/LessConstraint.html", "name": "SehrGut\\Eloquery\\Constraints\\LessConstraint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Constraints\\LessConstraint", "fromLink": "SehrGut/Eloquery/Constraints/LessConstraint.html", "link": "SehrGut/Eloquery/Constraints/LessConstraint.html#method_getOperator", "name": "SehrGut\\Eloquery\\Constraints\\LessConstraint::getOperator", "doc": "&quot;Get the operator to feed into the builder method.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Constraints", "fromLink": "SehrGut/Eloquery/Constraints.html", "link": "SehrGut/Eloquery/Constraints/LessEqualConstraint.html", "name": "SehrGut\\Eloquery\\Constraints\\LessEqualConstraint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Constraints\\LessEqualConstraint", "fromLink": "SehrGut/Eloquery/Constraints/LessEqualConstraint.html", "link": "SehrGut/Eloquery/Constraints/LessEqualConstraint.html#method_getOperator", "name": "SehrGut\\Eloquery\\Constraints\\LessEqualConstraint::getOperator", "doc": "&quot;Get the operator to feed into the builder method.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Constraints", "fromLink": "SehrGut/Eloquery/Constraints.html", "link": "SehrGut/Eloquery/Constraints/StartsWithConstraint.html", "name": "SehrGut\\Eloquery\\Constraints\\StartsWithConstraint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Constraints\\StartsWithConstraint", "fromLink": "SehrGut/Eloquery/Constraints/StartsWithConstraint.html", "link": "SehrGut/Eloquery/Constraints/StartsWithConstraint.html#method_getOperator", "name": "SehrGut\\Eloquery\\Constraints\\StartsWithConstraint::getOperator", "doc": "&quot;Get the operator to feed into the builder method.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Constraints\\StartsWithConstraint", "fromLink": "SehrGut/Eloquery/Constraints/StartsWithConstraint.html", "link": "SehrGut/Eloquery/Constraints/StartsWithConstraint.html#method_getPreparedValue", "name": "SehrGut\\Eloquery\\Constraints\\StartsWithConstraint::getPreparedValue", "doc": "&quot;The value transformed to match the operation.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Contracts", "fromLink": "SehrGut/Eloquery/Contracts.html", "link": "SehrGut/Eloquery/Contracts/Extractor.html", "name": "SehrGut\\Eloquery\\Contracts\\Extractor", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Contracts\\Extractor", "fromLink": "SehrGut/Eloquery/Contracts/Extractor.html", "link": "SehrGut/Eloquery/Contracts/Extractor.html#method___construct", "name": "SehrGut\\Eloquery\\Contracts\\Extractor::__construct", "doc": "&quot;Construct an Extractor instance.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Contracts\\Extractor", "fromLink": "SehrGut/Eloquery/Contracts/Extractor.html", "link": "SehrGut/Eloquery/Contracts/Extractor.html#method_extract", "name": "SehrGut\\Eloquery\\Contracts\\Extractor::extract", "doc": "&quot;Extract operations from the request.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Contracts", "fromLink": "SehrGut/Eloquery/Contracts.html", "link": "SehrGut/Eloquery/Contracts/Grammar.html", "name": "SehrGut\\Eloquery\\Contracts\\Grammar", "doc": "&quot;Describes a \&quot;grammar\&quot; according to which we extract structured parameters from a request.&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Contracts\\Grammar", "fromLink": "SehrGut/Eloquery/Contracts/Grammar.html", "link": "SehrGut/Eloquery/Contracts/Grammar.html#method___construct", "name": "SehrGut\\Eloquery\\Contracts\\Grammar::__construct", "doc": "&quot;Construct a new Grammar instance.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Contracts\\Grammar", "fromLink": "SehrGut/Eloquery/Contracts/Grammar.html", "link": "SehrGut/Eloquery/Contracts/Grammar.html#method_extract", "name": "SehrGut\\Eloquery\\Contracts\\Grammar::extract", "doc": "&quot;Extract all options from the request.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Contracts", "fromLink": "SehrGut/Eloquery/Contracts.html", "link": "SehrGut/Eloquery/Contracts/Operation.html", "name": "SehrGut\\Eloquery\\Contracts\\Operation", "doc": "&quot;Describes an operation on a Query Builder, eg. a filter constraint or sort order.&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Contracts\\Operation", "fromLink": "SehrGut/Eloquery/Contracts/Operation.html", "link": "SehrGut/Eloquery/Contracts/Operation.html#method_applyToBuilder", "name": "SehrGut\\Eloquery\\Contracts\\Operation::applyToBuilder", "doc": "&quot;Apply the operation to a query builder.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Contracts", "fromLink": "SehrGut/Eloquery/Contracts.html", "link": "SehrGut/Eloquery/Contracts/Parser.html", "name": "SehrGut\\Eloquery\\Contracts\\Parser", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Contracts\\Parser", "fromLink": "SehrGut/Eloquery/Contracts/Parser.html", "link": "SehrGut/Eloquery/Contracts/Parser.html#method___construct", "name": "SehrGut\\Eloquery\\Contracts\\Parser::__construct", "doc": "&quot;Construct a Parser instance.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Contracts\\Parser", "fromLink": "SehrGut/Eloquery/Contracts/Parser.html", "link": "SehrGut/Eloquery/Contracts/Parser.html#method_getConfig", "name": "SehrGut\\Eloquery\\Contracts\\Parser::getConfig", "doc": "&quot;Retrieve the configuration variables of the parser.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Contracts\\Parser", "fromLink": "SehrGut/Eloquery/Contracts/Parser.html", "link": "SehrGut/Eloquery/Contracts/Parser.html#method_setConfig", "name": "SehrGut\\Eloquery\\Contracts\\Parser::setConfig", "doc": "&quot;Set config value on the parser.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Contracts\\Parser", "fromLink": "SehrGut/Eloquery/Contracts/Parser.html", "link": "SehrGut/Eloquery/Contracts/Parser.html#method_setRequest", "name": "SehrGut\\Eloquery\\Contracts\\Parser::setRequest", "doc": "&quot;Override the request.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery", "fromLink": "SehrGut/Eloquery.html", "link": "SehrGut/Eloquery/Eloquery.html", "name": "SehrGut\\Eloquery\\Eloquery", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Eloquery", "fromLink": "SehrGut/Eloquery/Eloquery.html", "link": "SehrGut/Eloquery/Eloquery.html#method___construct", "name": "SehrGut\\Eloquery\\Eloquery::__construct", "doc": "&quot;Construct a new instance.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Eloquery", "fromLink": "SehrGut/Eloquery/Eloquery.html", "link": "SehrGut/Eloquery/Eloquery.html#method_extract", "name": "SehrGut\\Eloquery\\Eloquery::extract", "doc": "&quot;Extract operations from the request.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Eloquery", "fromLink": "SehrGut/Eloquery/Eloquery.html", "link": "SehrGut/Eloquery/Eloquery.html#method_apply", "name": "SehrGut\\Eloquery\\Eloquery::apply", "doc": "&quot;Apply query params from the request to given query builder.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Eloquery", "fromLink": "SehrGut/Eloquery/Eloquery.html", "link": "SehrGut/Eloquery/Eloquery.html#method_from", "name": "SehrGut\\Eloquery\\Eloquery::from", "doc": "&quot;Override the request from which to extract.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Eloquery", "fromLink": "SehrGut/Eloquery/Eloquery.html", "link": "SehrGut/Eloquery/Eloquery.html#method_allowFilterKeys", "name": "SehrGut\\Eloquery\\Eloquery::allowFilterKeys", "doc": "&quot;Set the filter whitelist.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Eloquery", "fromLink": "SehrGut/Eloquery/Eloquery.html", "link": "SehrGut/Eloquery/Eloquery.html#method_allowIncludes", "name": "SehrGut\\Eloquery\\Eloquery::allowIncludes", "doc": "&quot;Set the include whitelist.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Extractors", "fromLink": "SehrGut/Eloquery/Extractors.html", "link": "SehrGut/Eloquery/Extractors/AbstractExtractor.html", "name": "SehrGut\\Eloquery\\Extractors\\AbstractExtractor", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Extractors\\AbstractExtractor", "fromLink": "SehrGut/Eloquery/Extractors/AbstractExtractor.html", "link": "SehrGut/Eloquery/Extractors/AbstractExtractor.html#method_extract", "name": "SehrGut\\Eloquery\\Extractors\\AbstractExtractor::extract", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Extractors\\AbstractExtractor", "fromLink": "SehrGut/Eloquery/Extractors/AbstractExtractor.html", "link": "SehrGut/Eloquery/Extractors/AbstractExtractor.html#method___construct", "name": "SehrGut\\Eloquery\\Extractors\\AbstractExtractor::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Extractors\\AbstractExtractor", "fromLink": "SehrGut/Eloquery/Extractors/AbstractExtractor.html", "link": "SehrGut/Eloquery/Extractors/AbstractExtractor.html#method_makeGrammar", "name": "SehrGut\\Eloquery\\Extractors\\AbstractExtractor::makeGrammar", "doc": "&quot;Get an instance of the associated Grammar for this Extractor.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Extractors", "fromLink": "SehrGut/Eloquery/Extractors.html", "link": "SehrGut/Eloquery/Extractors/FilterExtractor.html", "name": "SehrGut\\Eloquery\\Extractors\\FilterExtractor", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Extractors\\FilterExtractor", "fromLink": "SehrGut/Eloquery/Extractors/FilterExtractor.html", "link": "SehrGut/Eloquery/Extractors/FilterExtractor.html#method_extract", "name": "SehrGut\\Eloquery\\Extractors\\FilterExtractor::extract", "doc": "&quot;Extract filter constraints from the request.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Extractors", "fromLink": "SehrGut/Eloquery/Extractors.html", "link": "SehrGut/Eloquery/Extractors/PaginateExtractor.html", "name": "SehrGut\\Eloquery\\Extractors\\PaginateExtractor", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Extractors\\PaginateExtractor", "fromLink": "SehrGut/Eloquery/Extractors/PaginateExtractor.html", "link": "SehrGut/Eloquery/Extractors/PaginateExtractor.html#method_extract", "name": "SehrGut\\Eloquery\\Extractors\\PaginateExtractor::extract", "doc": "&quot;Extract pagination parameters from the request.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Extractors", "fromLink": "SehrGut/Eloquery/Extractors.html", "link": "SehrGut/Eloquery/Extractors/SideloadExtractor.html", "name": "SehrGut\\Eloquery\\Extractors\\SideloadExtractor", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Extractors\\SideloadExtractor", "fromLink": "SehrGut/Eloquery/Extractors/SideloadExtractor.html", "link": "SehrGut/Eloquery/Extractors/SideloadExtractor.html#method_extract", "name": "SehrGut\\Eloquery\\Extractors\\SideloadExtractor::extract", "doc": "&quot;Extract includes from the request.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Extractors", "fromLink": "SehrGut/Eloquery/Extractors.html", "link": "SehrGut/Eloquery/Extractors/SortExtractor.html", "name": "SehrGut\\Eloquery\\Extractors\\SortExtractor", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Extractors\\SortExtractor", "fromLink": "SehrGut/Eloquery/Extractors/SortExtractor.html", "link": "SehrGut/Eloquery/Extractors/SortExtractor.html#method_extract", "name": "SehrGut\\Eloquery\\Extractors\\SortExtractor::extract", "doc": "&quot;Extract sort orders from the request.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Facades", "fromLink": "SehrGut/Eloquery/Facades.html", "link": "SehrGut/Eloquery/Facades/Eloquery.html", "name": "SehrGut\\Eloquery\\Facades\\Eloquery", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Facades\\Eloquery", "fromLink": "SehrGut/Eloquery/Facades/Eloquery.html", "link": "SehrGut/Eloquery/Facades/Eloquery.html#method_getFacadeAccessor", "name": "SehrGut\\Eloquery\\Facades\\Eloquery::getFacadeAccessor", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Grammar", "fromLink": "SehrGut/Eloquery/Grammar.html", "link": "SehrGut/Eloquery/Grammar/AbstractGrammar.html", "name": "SehrGut\\Eloquery\\Grammar\\AbstractGrammar", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Grammar\\AbstractGrammar", "fromLink": "SehrGut/Eloquery/Grammar/AbstractGrammar.html", "link": "SehrGut/Eloquery/Grammar/AbstractGrammar.html#method___construct", "name": "SehrGut\\Eloquery\\Grammar\\AbstractGrammar::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Grammar\\AbstractGrammar", "fromLink": "SehrGut/Eloquery/Grammar/AbstractGrammar.html", "link": "SehrGut/Eloquery/Grammar/AbstractGrammar.html#method_extract", "name": "SehrGut\\Eloquery\\Grammar\\AbstractGrammar::extract", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Grammar", "fromLink": "SehrGut/Eloquery/Grammar.html", "link": "SehrGut/Eloquery/Grammar/FilterGrammar.html", "name": "SehrGut\\Eloquery\\Grammar\\FilterGrammar", "doc": "&quot;Rules for extracting filter constraints from a Request.&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Grammar\\FilterGrammar", "fromLink": "SehrGut/Eloquery/Grammar/FilterGrammar.html", "link": "SehrGut/Eloquery/Grammar/FilterGrammar.html#method_extract", "name": "SehrGut\\Eloquery\\Grammar\\FilterGrammar::extract", "doc": "&quot;Extract an array of filter options from the request.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Grammar\\FilterGrammar", "fromLink": "SehrGut/Eloquery/Grammar/FilterGrammar.html", "link": "SehrGut/Eloquery/Grammar/FilterGrammar.html#method_validate", "name": "SehrGut\\Eloquery\\Grammar\\FilterGrammar::validate", "doc": "&quot;Validate the extacted array.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Grammar\\FilterGrammar", "fromLink": "SehrGut/Eloquery/Grammar/FilterGrammar.html", "link": "SehrGut/Eloquery/Grammar/FilterGrammar.html#method_validateFilter", "name": "SehrGut\\Eloquery\\Grammar\\FilterGrammar::validateFilter", "doc": "&quot;Validate a single filter.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Grammar\\FilterGrammar", "fromLink": "SehrGut/Eloquery/Grammar/FilterGrammar.html", "link": "SehrGut/Eloquery/Grammar/FilterGrammar.html#method_applyWhitelist", "name": "SehrGut\\Eloquery\\Grammar\\FilterGrammar::applyWhitelist", "doc": "&quot;Drop all items that are not contained in the whitelist.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Grammar\\FilterGrammar", "fromLink": "SehrGut/Eloquery/Grammar/FilterGrammar.html", "link": "SehrGut/Eloquery/Grammar/FilterGrammar.html#method_fillWithDefaults", "name": "SehrGut\\Eloquery\\Grammar\\FilterGrammar::fillWithDefaults", "doc": "&quot;Replace missing values with their defaults.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Grammar", "fromLink": "SehrGut/Eloquery/Grammar.html", "link": "SehrGut/Eloquery/Grammar/PaginateGrammar.html", "name": "SehrGut\\Eloquery\\Grammar\\PaginateGrammar", "doc": "&quot;Rules for extracting pagination parameters from a request.&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Grammar\\PaginateGrammar", "fromLink": "SehrGut/Eloquery/Grammar/PaginateGrammar.html", "link": "SehrGut/Eloquery/Grammar/PaginateGrammar.html#method_extract", "name": "SehrGut\\Eloquery\\Grammar\\PaginateGrammar::extract", "doc": "&quot;Extract pagination parameters from a request.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Grammar", "fromLink": "SehrGut/Eloquery/Grammar.html", "link": "SehrGut/Eloquery/Grammar/SideloadGrammar.html", "name": "SehrGut\\Eloquery\\Grammar\\SideloadGrammar", "doc": "&quot;Rules for extracting includes from a Request.&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Grammar\\SideloadGrammar", "fromLink": "SehrGut/Eloquery/Grammar/SideloadGrammar.html", "link": "SehrGut/Eloquery/Grammar/SideloadGrammar.html#method_extract", "name": "SehrGut\\Eloquery\\Grammar\\SideloadGrammar::extract", "doc": "&quot;Extract an array of included relationships from the request.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Grammar", "fromLink": "SehrGut/Eloquery/Grammar.html", "link": "SehrGut/Eloquery/Grammar/SortGrammar.html", "name": "SehrGut\\Eloquery\\Grammar\\SortGrammar", "doc": "&quot;Rules for extracting sort orders from a Request.&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Grammar\\SortGrammar", "fromLink": "SehrGut/Eloquery/Grammar/SortGrammar.html", "link": "SehrGut/Eloquery/Grammar/SortGrammar.html#method_extract", "name": "SehrGut\\Eloquery\\Grammar\\SortGrammar::extract", "doc": "&quot;Extract an array of sort options from the request.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Grammar\\SortGrammar", "fromLink": "SehrGut/Eloquery/Grammar/SortGrammar.html", "link": "SehrGut/Eloquery/Grammar/SortGrammar.html#method_validate", "name": "SehrGut\\Eloquery\\Grammar\\SortGrammar::validate", "doc": "&quot;Validate the extacted array.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Grammar\\SortGrammar", "fromLink": "SehrGut/Eloquery/Grammar/SortGrammar.html", "link": "SehrGut/Eloquery/Grammar/SortGrammar.html#method_validateSort", "name": "SehrGut\\Eloquery\\Grammar\\SortGrammar::validateSort", "doc": "&quot;Validate a single sort rule.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Grammar\\SortGrammar", "fromLink": "SehrGut/Eloquery/Grammar/SortGrammar.html", "link": "SehrGut/Eloquery/Grammar/SortGrammar.html#method_fillWithDefaults", "name": "SehrGut\\Eloquery\\Grammar\\SortGrammar::fillWithDefaults", "doc": "&quot;Replace missing values with their defaults.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery", "fromLink": "SehrGut/Eloquery.html", "link": "SehrGut/Eloquery/OperationCollection.html", "name": "SehrGut\\Eloquery\\OperationCollection", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\OperationCollection", "fromLink": "SehrGut/Eloquery/OperationCollection.html", "link": "SehrGut/Eloquery/OperationCollection.html#method___construct", "name": "SehrGut\\Eloquery\\OperationCollection::__construct", "doc": "&quot;Construct a OperationCollection instance.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\OperationCollection", "fromLink": "SehrGut/Eloquery/OperationCollection.html", "link": "SehrGut/Eloquery/OperationCollection.html#method_add", "name": "SehrGut\\Eloquery\\OperationCollection::add", "doc": "&quot;Add one or more operations to the collection.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\OperationCollection", "fromLink": "SehrGut/Eloquery/OperationCollection.html", "link": "SehrGut/Eloquery/OperationCollection.html#method_merge", "name": "SehrGut\\Eloquery\\OperationCollection::merge", "doc": "&quot;Merge another OperationCollection into this one.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\OperationCollection", "fromLink": "SehrGut/Eloquery/OperationCollection.html", "link": "SehrGut/Eloquery/OperationCollection.html#method_dump", "name": "SehrGut\\Eloquery\\OperationCollection::dump", "doc": "&quot;Return all contained operations.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\OperationCollection", "fromLink": "SehrGut/Eloquery/OperationCollection.html", "link": "SehrGut/Eloquery/OperationCollection.html#method_applyToBuilder", "name": "SehrGut\\Eloquery\\OperationCollection::applyToBuilder", "doc": "&quot;Apply all operations in the collection to the builder.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\OperationCollection", "fromLink": "SehrGut/Eloquery/OperationCollection.html", "link": "SehrGut/Eloquery/OperationCollection.html#method_append", "name": "SehrGut\\Eloquery\\OperationCollection::append", "doc": "&quot;Add an operation to the collection.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\OperationCollection", "fromLink": "SehrGut/Eloquery/OperationCollection.html", "link": "SehrGut/Eloquery/OperationCollection.html#method_sortComparator", "name": "SehrGut\\Eloquery\\OperationCollection::sortComparator", "doc": "&quot;Comparator function for sorting operations.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery", "fromLink": "SehrGut/Eloquery.html", "link": "SehrGut/Eloquery/OperationResult.html", "name": "SehrGut\\Eloquery\\OperationResult", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\OperationResult", "fromLink": "SehrGut/Eloquery/OperationResult.html", "link": "SehrGut/Eloquery/OperationResult.html#method___construct", "name": "SehrGut\\Eloquery\\OperationResult::__construct", "doc": "&quot;Construct a new instance.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\OperationResult", "fromLink": "SehrGut/Eloquery/OperationResult.html", "link": "SehrGut/Eloquery/OperationResult.html#method_getPaginationMeta", "name": "SehrGut\\Eloquery\\OperationResult::getPaginationMeta", "doc": "&quot;Get the pagination metadata.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\OperationResult", "fromLink": "SehrGut/Eloquery/OperationResult.html", "link": "SehrGut/Eloquery/OperationResult.html#method_merge", "name": "SehrGut\\Eloquery\\OperationResult::merge", "doc": "&quot;Merge two OperationResults.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Operations", "fromLink": "SehrGut/Eloquery/Operations.html", "link": "SehrGut/Eloquery/Operations/Filter.html", "name": "SehrGut\\Eloquery\\Operations\\Filter", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Operations\\Filter", "fromLink": "SehrGut/Eloquery/Operations/Filter.html", "link": "SehrGut/Eloquery/Operations/Filter.html#method___construct", "name": "SehrGut\\Eloquery\\Operations\\Filter::__construct", "doc": "&quot;Construct a Filter instance.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Operations\\Filter", "fromLink": "SehrGut/Eloquery/Operations/Filter.html", "link": "SehrGut/Eloquery/Operations/Filter.html#method_applyToBuilder", "name": "SehrGut\\Eloquery\\Operations\\Filter::applyToBuilder", "doc": "&quot;Apply the filter to a query builder.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Operations\\Filter", "fromLink": "SehrGut/Eloquery/Operations/Filter.html", "link": "SehrGut/Eloquery/Operations/Filter.html#method_apply", "name": "SehrGut\\Eloquery\\Operations\\Filter::apply", "doc": "&quot;Apply the filter to a query builder (not checking for relationship).&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Operations\\Filter", "fromLink": "SehrGut/Eloquery/Operations/Filter.html", "link": "SehrGut/Eloquery/Operations/Filter.html#method_actsOnRelation", "name": "SehrGut\\Eloquery\\Operations\\Filter::actsOnRelation", "doc": "&quot;Determine if the filter acts on a relation (as opposed to the model we&#039;re querying for).&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Operations\\Filter", "fromLink": "SehrGut/Eloquery/Operations/Filter.html", "link": "SehrGut/Eloquery/Operations/Filter.html#method_getRelation", "name": "SehrGut\\Eloquery\\Operations\\Filter::getRelation", "doc": "&quot;Get the relation on which to apply this filter.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Operations\\Filter", "fromLink": "SehrGut/Eloquery/Operations/Filter.html", "link": "SehrGut/Eloquery/Operations/Filter.html#method_getBareAttribute", "name": "SehrGut\\Eloquery\\Operations\\Filter::getBareAttribute", "doc": "&quot;Get the attribute that this filter compares without relationship prefix.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Operations\\Filter", "fromLink": "SehrGut/Eloquery/Operations/Filter.html", "link": "SehrGut/Eloquery/Operations/Filter.html#method_getOperation", "name": "SehrGut\\Eloquery\\Operations\\Filter::getOperation", "doc": "&quot;Get an Operation instance for the current filter.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Operations", "fromLink": "SehrGut/Eloquery/Operations.html", "link": "SehrGut/Eloquery/Operations/Paginate.html", "name": "SehrGut\\Eloquery\\Operations\\Paginate", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Operations\\Paginate", "fromLink": "SehrGut/Eloquery/Operations/Paginate.html", "link": "SehrGut/Eloquery/Operations/Paginate.html#method___construct", "name": "SehrGut\\Eloquery\\Operations\\Paginate::__construct", "doc": "&quot;Construct a Paginate instance.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Operations\\Paginate", "fromLink": "SehrGut/Eloquery/Operations/Paginate.html", "link": "SehrGut/Eloquery/Operations/Paginate.html#method_applyToBuilder", "name": "SehrGut\\Eloquery\\Operations\\Paginate::applyToBuilder", "doc": "&quot;Apply the pagination constraints to a query builder.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Operations", "fromLink": "SehrGut/Eloquery/Operations.html", "link": "SehrGut/Eloquery/Operations/Sideload.html", "name": "SehrGut\\Eloquery\\Operations\\Sideload", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Operations\\Sideload", "fromLink": "SehrGut/Eloquery/Operations/Sideload.html", "link": "SehrGut/Eloquery/Operations/Sideload.html#method___construct", "name": "SehrGut\\Eloquery\\Operations\\Sideload::__construct", "doc": "&quot;Construct a Sideload instance.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Operations\\Sideload", "fromLink": "SehrGut/Eloquery/Operations/Sideload.html", "link": "SehrGut/Eloquery/Operations/Sideload.html#method_applyToBuilder", "name": "SehrGut\\Eloquery\\Operations\\Sideload::applyToBuilder", "doc": "&quot;Apply the sideload to a query builder.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Operations", "fromLink": "SehrGut/Eloquery/Operations.html", "link": "SehrGut/Eloquery/Operations/Sort.html", "name": "SehrGut\\Eloquery\\Operations\\Sort", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Operations\\Sort", "fromLink": "SehrGut/Eloquery/Operations/Sort.html", "link": "SehrGut/Eloquery/Operations/Sort.html#method___construct", "name": "SehrGut\\Eloquery\\Operations\\Sort::__construct", "doc": "&quot;Construct a Sort instance.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Operations\\Sort", "fromLink": "SehrGut/Eloquery/Operations/Sort.html", "link": "SehrGut/Eloquery/Operations/Sort.html#method_applyToBuilder", "name": "SehrGut\\Eloquery\\Operations\\Sort::applyToBuilder", "doc": "&quot;Apply the sort order to a query builder.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery", "fromLink": "SehrGut/Eloquery.html", "link": "SehrGut/Eloquery/Operators.html", "name": "SehrGut\\Eloquery\\Operators", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Operators", "fromLink": "SehrGut/Eloquery/Operators.html", "link": "SehrGut/Eloquery/Operators.html#method_all", "name": "SehrGut\\Eloquery\\Operators::all", "doc": "&quot;Retrieve all possible operations.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Operators", "fromLink": "SehrGut/Eloquery/Operators.html", "link": "SehrGut/Eloquery/Operators.html#method_exists", "name": "SehrGut\\Eloquery\\Operators::exists", "doc": "&quot;Check if given operation exists \/ is defined.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery\\Providers", "fromLink": "SehrGut/Eloquery/Providers.html", "link": "SehrGut/Eloquery/Providers/EloqueryServiceProvider.html", "name": "SehrGut\\Eloquery\\Providers\\EloqueryServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\Providers\\EloqueryServiceProvider", "fromLink": "SehrGut/Eloquery/Providers/EloqueryServiceProvider.html", "link": "SehrGut/Eloquery/Providers/EloqueryServiceProvider.html#method_register", "name": "SehrGut\\Eloquery\\Providers\\EloqueryServiceProvider::register", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Providers\\EloqueryServiceProvider", "fromLink": "SehrGut/Eloquery/Providers/EloqueryServiceProvider.html", "link": "SehrGut/Eloquery/Providers/EloqueryServiceProvider.html#method_registerConfig", "name": "SehrGut\\Eloquery\\Providers\\EloqueryServiceProvider::registerConfig", "doc": "&quot;Register and publish the config file.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\Providers\\EloqueryServiceProvider", "fromLink": "SehrGut/Eloquery/Providers/EloqueryServiceProvider.html", "link": "SehrGut/Eloquery/Providers/EloqueryServiceProvider.html#method_registerBindings", "name": "SehrGut\\Eloquery\\Providers\\EloqueryServiceProvider::registerBindings", "doc": "&quot;Register bindings to the service container.&quot;"},
            
            {"type": "Class", "fromName": "SehrGut\\Eloquery", "fromLink": "SehrGut/Eloquery.html", "link": "SehrGut/Eloquery/RequestParser.html", "name": "SehrGut\\Eloquery\\RequestParser", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SehrGut\\Eloquery\\RequestParser", "fromLink": "SehrGut/Eloquery/RequestParser.html", "link": "SehrGut/Eloquery/RequestParser.html#method___construct", "name": "SehrGut\\Eloquery\\RequestParser::__construct", "doc": "&quot;Construct a RequestParser instance.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\RequestParser", "fromLink": "SehrGut/Eloquery/RequestParser.html", "link": "SehrGut/Eloquery/RequestParser.html#method_extract", "name": "SehrGut\\Eloquery\\RequestParser::extract", "doc": "&quot;Extract all query Operations from the request.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\RequestParser", "fromLink": "SehrGut/Eloquery/RequestParser.html", "link": "SehrGut/Eloquery/RequestParser.html#method_getConfig", "name": "SehrGut\\Eloquery\\RequestParser::getConfig", "doc": "&quot;Retrieve the configuration variables of the parser.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\RequestParser", "fromLink": "SehrGut/Eloquery/RequestParser.html", "link": "SehrGut/Eloquery/RequestParser.html#method_setConfig", "name": "SehrGut\\Eloquery\\RequestParser::setConfig", "doc": "&quot;Set config value on the parser.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\RequestParser", "fromLink": "SehrGut/Eloquery/RequestParser.html", "link": "SehrGut/Eloquery/RequestParser.html#method_setRequest", "name": "SehrGut\\Eloquery\\RequestParser::setRequest", "doc": "&quot;Override the request.&quot;"},
                    {"type": "Method", "fromName": "SehrGut\\Eloquery\\RequestParser", "fromLink": "SehrGut/Eloquery/RequestParser.html", "link": "SehrGut/Eloquery/RequestParser.html#method_makeExtractors", "name": "SehrGut\\Eloquery\\RequestParser::makeExtractors", "doc": "&quot;Instantiate the extractors.&quot;"},
            
            
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


